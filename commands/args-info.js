module.exports = {
	name: 'args-info',
	description: 'information on arguments',
	args: true,
	usage: '<arg1> <arg2> ...',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		else {
			message.channel.send(`command: ${command}\nargs: ${args}`)
		}
	},
};