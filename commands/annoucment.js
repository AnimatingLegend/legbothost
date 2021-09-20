const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "legbot",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`LegBot Annoucment`)
        .addField('I have came to the decision that i will no longer be working/updating legbot anymore. The reasons too this is because of school, and my own personal projects. Though the bot will stay online 24/7, there will be no more updates starting 10/1/21.')
        .addField('I would like to thank you guys for using/testing LegBot while it was in development, I will also like to thank color.#8482 for helping me out with some commands aswell. i appreciate the love and support, and **thank you for testing Legbot!**')
        .addField(`* ~ legend.#7654 * `)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
