module.exports = {
	name: 'server',
	description: 'provides server information',
	guildOnly: true,
	execute(message, args) {
		message.channel.send(`this server's name is ${message.guild.name}\nmember count: ${message.guild.memberCount}`);
	},
};