const { EmbedBuilder } = require('discord.js');
const fetch = require('@replit/node-fetch')

module.exports = {
   config: {
    name: "anime-pat",
    description: "Post the random pat",
    category: "Anime",
    accessableby: "Members",
    usage: "<mention>",
    aliases: [],
},

    run: async (client, message, args, prefix) => {
        let link = ""
        
        await fetch('https://some-random-api.ml/animu/pat').then(res => res.json()).then(json => link = json.link);

        const value = message.mentions.users.first()

        if (value){
            const embed = new EmbedBuilder()
                .setDescription(`*Pats <@${value.id}>*`)
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
