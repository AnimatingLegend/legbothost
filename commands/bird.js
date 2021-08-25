const axios = require('axios');
const { MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "birb",
    category: "thing",
    
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/animal/birb"
        const facts = "https://some-random-api.ml/facts/birb"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;
            
            responses = await axios.get(facts)
            fact = responses.data
   
        } catch(e) {
            return message.channel.send('error')

        }

        const embed = new MessageEmbed()
        .setTitle(`Bird images/facts`)
        .setColor(`RANDOM`)
        .setDescription(fact.fact)
        .setImage(image.link)

        await message.channel.send(embed)
    }
}
       
