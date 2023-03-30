const { EmbedBuilder} = require('discord.js')
const { Snake } = require('discord-gamecord');

module.exports = {
    config: {
        name: "play-snake",
        aliases: [ "snake"],
        usage: "(play snake command)",
        category: "Games",
        description: "play snake command",
        accessableby: "Members"
    },
    run: async (client, message, args) => {
     const Game = new Snake({
        message: message,
        isSlashGame: false,
        embed: {
          title: 'Snake Game',
          overTitle: 'Game Over',
          color: '#5865F2'
        },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️', 
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
        foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
        stopButton: 'Stop',
        timeoutTime: 60000,
        playerOnlyMessage: 'Only {player} can use these buttons.'
    });
      
    Game.startGame();
  },
}; 
