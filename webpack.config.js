var webpack = require(process.cwd() + '/webpack.config.js');

webpack.entry = "./plugins/motion/front/src/index.jsx";
webpack.output = {
	path: "./plugins/motion/front/assets",
	filename: "motion.js"
}

module.exports = webpack;
