const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	aliases: ['commands'],
	description: 'list all commands or info about a specific command',
	usage: '<command>',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('here\'s a list of all of my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nyou can send \`${prefix}help <command name>\` to get info on a specific command!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('sent you a DM with all my commands');
				})
				.catch(err => {
					console.err(`could not send help DM to ${message.author.tag}\n`, error);
					message.reply('couldn\'t DM you! do you have DMs disabled?');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command');
		}

		data.push(`**name:** ${command.name}`);

		if (command.aliases) data.push(`**aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**description:** ${command.description}`);
		if (command.usage) data.push(`**usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
	}
}