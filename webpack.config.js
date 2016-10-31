require('babel/register');
var webpack = require(process.cwd() + '/webpack.config.js');
var conf = require('./config/config.js');

webpack.entry = "./plugins/" + conf.name + "/front/src/index.jsx";
webpack.output = {
	path: "./plugins/" + conf.name + "/front/assets",
	filename: conf.name + ".js"
}

module.exports = webpack;
