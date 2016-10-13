import { Plugin, success, error, warning } from './../../core/';

var spawn = require('child_process').spawn;

let which = spawn('which', ['motion']);

which.on('close', (code) => {
  if(1 === code){
    error('Sorry, this module requires Motion to be installed');
  }
});
