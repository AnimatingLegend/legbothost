const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 8/24/21`)
        .setColor(`#3734eb`)
        .addField(`- Made github repository so bot can stay online 24/7 on heroku`)
        .addField(`- Fixed a Npm error with discord.js (TOOK ME 4 HOURS FHJIDFGDASJKHFGHASJKFDSADHFKAJDSF) thanks color for the help.`)
        .addField(`- Added Util code to make my cmds faster (TOTALLY didnt skid the code.)`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
