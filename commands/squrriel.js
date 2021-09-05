const { default: axios } = require('axios');
const axois = require('axois');
const { MessageEmbed } = require('discord.js');
const { description } = require('../info/help');

module.exports = {
    name: "squrriel",
    category: "animals",
    description: "rest in peace colors squrriel. :pray:",
    
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/squrriel";
        const facts = "https://some-random-api.ml/facts/squrriel"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Squrriel images, and facts (tribute to colors squrriel.)`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}
