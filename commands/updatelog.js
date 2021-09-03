const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/3/21`)
        .addField(`- Added 8ball.js Usage: lb-8Ball`)
        .addField(`- Minor fixes to howgay.js (removed all whitelists people on command. (**including me**))`)
        .setColor(`#3734eb`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
