const { EmbedBuilder } = require('discord.js');
const fetch = require('@replit/node-fetch')

module.exports = {
  config: {
    name: "anime-hug",
    description: "Post the random hug",
    category: "Anime",
    usage: "<mention>",
    aliases: [],
    accessableby: "Members"
    }, 
    run: async (client, message, args, prefix) => {
        let link = ""
        
        await fetch('https://some-random-api.ml/animu/hug').then(res => res.json()).then(json => link = json.link);

        const value = message.mentions.users.first()

        if (value){
            const embed = new EmbedBuilder()
                .setDescription(`*Hugs <@${value.id}>*`)
                .setImage(link)
                .setFooter({ text: `Provided by some-random-api.ml`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor('Blue')
            message.channel.send({ embeds: [embed] })
        } else {
            const embed = new EmbedBuilder()
                .setImage(link)
                .setFooter({ text: `Provided by some-random-api.ml`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                .setColor('Blue')
            message.channel.send({ embeds: [embed] })
        }
    }
};
