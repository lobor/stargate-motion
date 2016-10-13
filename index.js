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

  }

  onFront(){

  }
}


export default PluginSample;
