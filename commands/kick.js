module.exports = {
	name: 'kick',
	description: 'pretend to kick a user',
	guildOnly: true,
	args: true,
	usage: '<user>',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`you want to kick ${taggedUser}`);
	},
};