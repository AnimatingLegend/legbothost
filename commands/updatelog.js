const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/4/21`)
        .addField(`- Minor fixes to 8ball.js - removed some 8ball answers cause they didnt rlly make sense.`)
        .addField(`- Added 8ball, weather, and tictactoe to help.js`)
        .setColor(`#3734eb`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
