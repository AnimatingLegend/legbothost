const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/6/21`)
        MessageEmbed.addField(`- Fixed Embed showing "undefined" in updatelog.js`)
        MessageEmbed.addField(`- updated legbots custom status again - "Prefix lb-"`)
        .setColor("RANDOM")
        .setTimestamp();

        await message.channel.send(embed)
    }
}
