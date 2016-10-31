import { Plugin, success, error, warning } from './../../core/index';
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const fs = require('fs');
const os = require('os');
const motion = require('./lib/motion');


class Motion extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  constructor(){
    super();

    this.motion = new motion();
  }

  install(){
    this.checkMotion();
  }

  remove(){
    super.remove();
    this.dependencies.server.off('onReloadServer');
  }

  convertJsonToConf(data){
    return JSON.stringify(data)
  		.replace(/({|}|'|")/g, '')
  		.replace(/:/g, ' ')
  		.replace(/,/g, os.EOL);
  }

  createCamConf(data, name){
    this.writeConf({
      conf: data,
      path: __dirname + '/tmp/',
      name: name
    });
  }

  writeConf(params){
    fs.writeFileSync(params.path + params.name + '.js', 'module.exports = ' + JSON.stringify(params.conf) + ';');
    fs.writeFileSync(params.path + params.name + '.conf', this.convertJsonToConf(params.conf));
  }

  loadCamera(){
    exec('ls /dev/video*', (error, stdout, stderr) => {
      let webCam = stdout.split('\n'); // output => ['/dev/video0', '/dev/video1', '']
      let configJson = {};

    	// Hack last item
    	webCam.pop();

      // console.log(this.props.conf.motion);
      if(webCam.length){
        webCam.forEach((el, i) => {
          try {
            configJson = require(__dirname + '/tmp/cam' + i + '.js');
          } catch (e) {
            configJson = {
              videodevice: el,
              stream_port: '808' + (i + 1),
              stream_localhost: 'on',
              target_dir: './tmp/detect/camera' + i
            };
            this.createCamConf(configJson, 'cam' + 1);
          }

          this.motion.addCam(configJson);
        });

        this.emit('addCam');

        this.motion.setConfig(this.props.conf.motion);

        this.motion.setConfigPath(__dirname + '/tmp/');
        this.writeConf({
          conf: this.props.conf.motion,
          path: __dirname + '/tmp/',
          name: 'confcam'
        });
        this.start();
      }
    });
  }


  checkMotion(){
    let which = spawn('which', ['motion']);
    let that = this;
    which.on('close', (code) => {
      if(1 === code){
        error('Sorry, this module requires Motion to be installed');

        exec('apt-get install motion', (error, stdout, stderr) => {
          if (error) {
            return;
          }
          this.loadCamera();
        });
      }
      else{
        this.loadCamera();
      }
    });
  }

  start(){
    this.motion.start();
  }
}


export default Motion;
