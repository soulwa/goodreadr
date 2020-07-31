const Discord = require('discord.js');

module.exports = {
	name: 'book',
	aliases: ['novel', 'b'],
	description: 'search for a book on goodreads',
	args: true,
	usage: '<title> <year>',
	execute(message, args) {
		const bookTitle = args.join(' ');

		const author = `**Author:** George Orwell`;
		const genres = `**Genres:** Classics, Fiction, Dystopia, Fantasy`;
		const rating = `**Rating:** 3.94/5 | 2,672,372 ratings`;

		const description = [author, genres, rating]

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(bookTitle + ' (1945)')
			.setURL('https://discord.js.org/')
			//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription(description)
			.setThumbnail('https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images-medium-5/animal-farm-book-cover-poster-art-1-nishanth-gopinathan.jpg')
			//.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTimestamp()
			.setFooter('powered by goodreads api');

		message.channel.send(exampleEmbed);
	}
}