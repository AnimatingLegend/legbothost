const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/11/21 (stfu about the date)`)
        .addField(`- Minor Fixes to Userinfo.js - Installed a couple of packages to make the code run. `)
        .addField(`- Added UserInfo.js back to legbot for more testing purposes (may not work cause im still reworking )`)
        .setColor("RANDOM")
        .setTimestamp();

        await message.channel.send(embed)
    }
}
