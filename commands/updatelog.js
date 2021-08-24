const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 8/23/21`)
        .setColor(`#3734eb`)
        .addField(`- Added Meme Command. (still work in progress) usage: lb-meme. sends unfunny reddit memes lol.`)
        .addField(`- Added an cmd command (if that makes sense lol.) usage: lb-cmds. it basically tells you all the commands i have and how to use it.`)
        .addField(`- Added Cat Command (Cats are cool) usage: lb-cats, sends facts about cats along with the picture of the cat you're learning about.`)
        .addField(`- Made github repository so bot can stay online 24/7 on repel`)
        .addField(`- Minor bug fixes to updates.js Cmd (for some reason there was some code from dog.js in here.)`)
        .addField(`- Minor bug fixes to cat.js's cat api system (it would show dog photos, cause i accidentally used a dog api.)`)
        .addField(`- Added Cat.Js command to Cmds. (if that still makes sense lol.)`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}