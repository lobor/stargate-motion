import { Plugin, success, error, warning } from './../../core/';


class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onDependencies(){
    // console.log(Object.keys(this.dependencies));
    // console.log(this.dependencies.server);
    // this.checkMotion();
    this.dependencies.server.on('onReloadServer', () => {
      this.checkMotion();
    });
  }

  remove(){
    super.remove();
    this.dependencies.server.off('onReloadServer');
  }

  onBack(){

  }

  onFront(){

  }

  checkMotion(){
    var spawn = require('child_process').spawn;
    let which = spawn('which', ['motion']);

    which.on('close', (code) => {
      if(1 === code){
        error('Sorry, this module requires Motion to be installed');
        // this.dependencies.server.on('onSocket', () => {
        //   console.log(Object.keys(this.dependencies.server));
        // })
        if(this.dependencies.server.socket){
          this.dependencies.server.socket.on('askSudo:response', (data, fc) => {
            const exec = require('child_process').exec;
            exec('echo ' + data.password + ' | sudo -S apt-get install motion', (error, stdout, stderr) => {
              if (error) {
                return;
              }
              fc({success: true});
            });

            // this.dependencies.server.socket.off('askSudo:response');
          });

          this.dependencies.server.socket.emit('askSudo');
        }
        // console.log(this.dependencies.server);
      }
    });
  }
}


export default PluginSample;
