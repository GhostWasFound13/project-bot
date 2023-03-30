const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const formatDuration = require('../../../structures/FormatDuration.js')

const rewindNum = 10;

module.exports = { 
    name: ["music", "rewind"],
    description: "Rewind timestamp in the song!",
    category: "Music",
    options: [
        {
            name: "seconds",
            description: "Rewind timestamp in the song!",
            type: ApplicationCommandOptionType.Integer,
            required: false,
            min_value: 1
        }
    ],
    run: async (client, interaction) => {
		const player = client.manager.players.get(interaction.guild.id);
		if (!player) return interaction.reply(`No playing in this guild!`);
        const { channel } = interaction.member.voice;
        if (!channel || interaction.member.voice.channel !== interaction.guild.members.me.voice.channel) return interaction.reply(`I'm not in the same voice channel as you!`);

        const value = interaction.options.getInteger("seconds");
        const CurrentDuration = formatDuration(player.position);

        if(value && !isNaN(value)) {
			if((player.position - value * 1000) > 0) {
                await player.seek(player.position - value * 1000);
                
                const embed = new EmbedBuilder()
                    .setDescription(`\`⏮\` | *Rewind to:* \`${CurrentDuration}\``)
                    .setColor(client.color);

                interaction.reply({ embeds: [embed] });
			} else {
				return interaction.reply(`You can't rewind more than the duration of the song!`);
			}
		} else if(value && isNaN(value)) {
			return interaction.reply(`Please enter a number!`);
		}

		if(!value) {
			if((player.position - rewindNum * 1000) > 0) {
                await player.seek(player.position - rewindNum * 1000);
                
                const embed = new EmbedBuilder()
                    .setDescription(`\`⏮\` | *Rewind to:* \`${CurrentDuration}\``)
                    .setColor(client.color);

                interaction.reply({ embeds: [embed] });
			} else {
				return interaction.reply(`You can't rewind more than the duration of the song!`);
			}
		}
	}
};