module.exports = {
	name: 'userinfo',
	description: 'who sent this command',
	execute(message, args) {
		message.channel.send(`${message.author.username} <${message.author.id}> sent that`);
	},
};