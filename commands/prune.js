module.exports = {
	name: 'prune',
	description: 'delete messages in channel',
	args: true,
	usage: '<count>',
	execute(message, args) {
		const amt = parseInt(args[0]) + 1;

		if (isNaN(amt)) {
			return message.reply('that doesn\'t seem to be a valid number');
		}
		else if (amt <= 1 || amt > 100) {
			return message.reply('you need a number between 1 and 99!');
		}

		message.channel.bulkDelete(amt, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!')
		});
	},
};