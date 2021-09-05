const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    description: "8ball command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Please ask a full question.')
        let replies = ["yes.", "yus", "of course.", "Yes – definitely.", "no.", "Better not tell you now.", "nah", "never","I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "sadly yes..", "sadly no..", "maybe!", "ERROR with qustion, please ask again.."];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#1C1C1C")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballembed)
    }
}
