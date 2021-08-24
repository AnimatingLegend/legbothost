const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "cmds",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Leg Bot Commands`)
        .setColor(`#68b08b`)
        .addField(`- lb-dog (projects images of dogs, and tells facts about dogs.)`)
        .addField (`- lb-cat (projects images of cats, and tells facts about cats.) `)
        .addField(`- lb-howgay (tells gay percentage.)`)
        .addField(`- lb-joke (tells funny dad jokes.) `)
        .addField(`- lb-meme (shows randomly generated memes from reddit API)`)
        .addField(`- lb-updates (shows updates i made to the bot.)`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}