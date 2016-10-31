var spawn = require('child_process').spawn;
var fs = require('fs');
var cs = require('./../../core/console');


try {
  fs.accessSync('./tmp/', fs.F_OK);
} catch (e) {
  fs.mkdirSync('./tmp/', 0777);
}
