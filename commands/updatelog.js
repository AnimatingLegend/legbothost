const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 9/19/21 (LegBot Annoucment, and final updates)`)
        .addField(`I have made the desicion LegBot will no longer be getting updated due to school, and my own personal projects. Bugs will probably not be fixed due to those decisions in mind, i will put out my LAST few updates to the bot before moving on with school and other projects.`)
        .addField(`- Updated About me for legbot`)
        .addField(`- Changed a couple of prompts in 8ball.js`)
        .addField(`- Removed whitelisted people from howgay.js (sorry color and duck lawl)`)
        .addField(`- Updated Reddit API for meme.js - memes should be a lot more funnier now`)
        .addField(`- Changed legbots hosting service to replit (heroku you have to pay for, and its harder to push updates on.)`)
        .addField(`- Added Squrriel.js back to the repository (there are no facts cause i couldnt get my hands on one :sadge:)| Usage - lb-squrriel `)
        .addField(`- removed tictactoe.js - impossible bugs i didnt even know how to fix so i decied to discontinue the command and delete it`)
        .addField(`- removed userinfo.js - though this would of been a cool command to have, the bugs were too much and i couldnt figure out what was the problem so i just discontinuted it`)
        .addField(`Those are gonna be the LAST updates for this bot. i appreciate you guys sticking by me when working on this bot, but all good times must come to an end.. thank you guys for using/testing legbot! <3 ~ legend.#7654`)
        .setColor("RANDOM")
        .setTimestamp();

        await message.channel.send(embed)
    }
}
