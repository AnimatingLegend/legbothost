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
        .addField(`- Updated LegBots PFP, and name.`)
        .addField(`- Updated LegBots custom status. - "Holy Shit im a bot."`)
        .addField(`- Minor fixes to Squrriel.js - Had to reinstall NPM so command could work properly (**COMMAND WILL RETURN IN A COUPLE OF DAYS BECAUSE IM STILL DOING MORE TESTING ON IT.**)`)
        .addField(`- More updates to legbot - Made an "About me", and added another custom status.`)
        .setColor(`#3734eb`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
