const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 8/25/21`)
        .setColor(`#3734eb`)
        .addField(`- Minor fixes to: howgay.js - randomized ppls gay percentage`)
        .addField(`- userinfo.js is not accessable to members due to a lot of bugs with the command.`)
        .addField(`- Added hangman cmd usage:lb-hangman`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
