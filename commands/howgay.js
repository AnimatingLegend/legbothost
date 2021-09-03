const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);
        if (member.id == "349207063299227648") rng = "0"
        if (member.id == "816684213885599754") rng = "100,000,000,000"
        if (member.id == "421794471525744650") rng = "69 :sunglasses: :rainbow:"

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("GREEN")

        message.channel.send(howgayembed);
    }
}
