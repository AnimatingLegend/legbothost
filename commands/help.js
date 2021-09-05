const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "tells you about the bot, how many commands you can use and how to use it.",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefix- `lb-`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields({
            name: 'About this bot',
            value: 'legbot is just i bot i decided to make on my freetime. its still a work in progress and im looking on adding more commands soon.',
        },
        {
            name: 'Information',
            value: '`some of the commands below are still a work in progress so dont expect it to be organized.`',        
        },
        {
            name: 'all of these commands are visible to everyone and anyone can use them if they want.©',
            value: '`| info: help, updates, corona, weather, userinfo | fun: cat, dog, birb, howgay, joke, meme, 8ball, tictactoe (WORK IN PROGRESS) |`'
        },)

        message.channel.send(help)
    }
}
