import { Plugin } from './../../core/';


class PluginSample extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onDependencies(){

  }

  onBack(){
    console.log(3);
  }

  onFront(){

  }
}


export default PluginSample;
