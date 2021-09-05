const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/5/21`)
        .addField(`- Minor fixes to Userinfo.js - grammar issues (**code unfinished.**)`)
        .addField(`- More fixes to tictactoe.js - Fixed constructing error, grammar issues (**code unfinished.**)`)
        .addField(`- Removed some more 8ball prompts cause they were still making no sense.`)
        .addField(`- Squrriel.js in the works - Tribute to colors pet squrriel R.I.P `)
        .addField(`- Whitelisted myself and others in howgay.js`)
        .addField(`- Removed Squrriel.js from github repository to fix bugs **command will be in use soon.**`)
        .addField(`- Updated PFP, and name of Legbot.`)
        .setColor(`#3734eb`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
