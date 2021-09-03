const Discord =  requrie('discord.js')

module.exports = {
    name: "8Ball",
    description: "8Ball command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Please ask me a full question.')
        let replies = ["yes.", "Outlook seems good.", "yus", "of course.", "Yes – definitely.", "no.", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "only for today!", "not for today c:", "sadly yes..", "sadly no..", "maybe!", "ask again.. later.."];

        let result = Math.floor((Math.floor() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor(`#001f42`)
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.sbed(ballembed)

    }
}
