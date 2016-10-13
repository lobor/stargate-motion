var spawn = require('child_process').spawn;
var fs = require('fs');
var cs = require('./../../core/console');


try {
  fs.accessSync('./tmp/', fs.F_OK);
} catch (e) {
  fs.mkdirSync('./tmp/', 0777);
}


try {
  fs.accessSync('./tmp/confcam.js', fs.F_OK);
} catch (e) {
  let cpConfCam = spawn('cp', ['./config/cam/confcam.js.dist', './tmp/confcam.js']);

  cpConfCam.stderr.on('data', (data) => {
    cs.error('Copy conf cam', data);
  });

  cpConfCam.on('close', (code) => {
    if(code === 0){
      cs.success('Copy conf cam');
    }
  });
}
