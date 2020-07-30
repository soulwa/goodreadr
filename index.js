const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('ready!');
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('pong!');
	}
	else if (command === 'beep') {
		message.channel.send('boop!');
	}
	else if (command === 'server') {
		message.channel.send(`this server's name is ${message.guild.name}\nmember count: ${message.guild.memberCount}`);
	}
	else if (command === 'userinfo') {
		message.channel.send(`${message.author.username} <${message.author.id}> sent that`);
	}
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`you didn't give any arguments!`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		else {
			message.channel.send(`command: ${command}\nargs: ${args}`)
		}
	}
	else if (command === 'kick') {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`you want to kick ${taggedUser}`);
	}
	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	}
	else if (command === 'prune') {
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
	}
});

client.login(token);