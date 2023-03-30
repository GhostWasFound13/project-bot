const { readdirSync } = require("fs")

module.exports = async (client) => {
  const load = dirs => {
    const commands = readdirSync(`./commands/Message/${dirs}/`).filter(d => d.endsWith('.js'));
    for (let file of commands) {
      let pull = require(`../commands/Message/${dirs}/${file}`);
      client.commands.set(pull.config.name, pull);
      if (pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name));
    };
    if (client.commands.size) {
      console.log(`${client.commands.size} Prefix Command Loaded!`);
    } else {
      console.log(`No prefix command loaded, is everything ok?`);
    }

  };
  ["Music", "Filters", "Misc", "Games", "Anime", "Fun"].forEach(x => load(x));
}
