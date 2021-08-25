const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "updates",
    category: "commands",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const embed = new MessageEmbed()
        .setTitle(`Update Log 8/24/21`)
        .setColor(`#3734eb`)
        .addField(`- Made github repository so bot can stay online 24/7 on heroku`)
        .addField(`- Fixed a Npm error with discord.js (thanks color for the help.)`)
        .addField(`- Added Util code to make my cmds faster (TOTALLY didnt skid the code.)`)
        .addField(`- Added Corona cmd `)
        .addField(`- added help command. (more cleaner than cmds command) usage: lb-help tells you info about legbot and all the commands.`)
        .addField(`- Removed Cmds command. (if that STILL makes sense.)`)
        .addField(`- Minor Fixes to meme.js (Got a better api so the memes can be more funnier.)`)
        .addField(`- Added Bird.js command (birb.) usage: lb-birb sends facts and images of birds.`)
        .addField(`- Minor bug fixes to Bird.js (Updated img api cause it wasnt showing any photos of the bird.)`)
        .setTimestamp();

        await message.channel.send(embed)
    }
}
