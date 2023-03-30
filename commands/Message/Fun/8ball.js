const { EmbedBuilder} = require('discord.js')


module.exports = {
    config: {
        name: "8ball",
        usage: "a!8ball (message?)",
        category: "Fun",
        description: "play 8ball :)",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
             const question = args.join(' ');
        if (!question) return message.reply('Please specify a question!');
        let responses = [
            'It is certain',
            'Hm',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As i see it, yes',
            'Most likely',
            'For sure',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',
        ];
        const response = Math.floor(Math.random() * responses.length);
        const embed = new EmbedBuilder()
            .setColor('BLUE')
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('🎱 8ball')
            .addFields(
                { name: `${message.author.username}'s Question`, value: question },
                { name: '8ball says', value: responses[response] }
            )
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
