const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/2/21 (mini update lawl)`)
        .addField(`- Removed Hangman.js (because i can)`)
        .addField(`- Added Weather command (weather is cool) Usage:lb-Weather <country/state>`)
        .addField(`- Added TicTacToe Command (im god at this game.) lb-tictactoe - game.`)
        .addField(`- minor updates to howgay.js (whitelisted some peeps lol)`)
        .addField(`- more fixes to howgay.js - numbers were not showing up for some reason`)
        .setColor(`#3734eb`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
