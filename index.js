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
      console.log(3);
      this.checkMotion();
    });
  }

  onBack(){

  }

  onFront(){

  }

  checkMotion(){
    var spawn = require('child_process').spawn;
    let which = spawn('which', ['motion']);

    which.on('close', (code) => {
      console.log(code);
      if(1 === code){
        error('Sorry, this module requires Motion to be installed');
        // this.dependencies.server.on('onSocket', () => {
        //   console.log(Object.keys(this.dependencies.server));
        // })
        this.dependencies.server.socket.emit('askSudo');
        // console.log(this.dependencies.server);
      }
    });
  }
}


export default PluginSample;
