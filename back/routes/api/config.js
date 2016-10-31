export default [
	{
		'name': 'motion:get',
		'depPlugin': ['motion'],
		'call': function(data, fc){
			fc(this.motion.getCam());
		}
	}
];
