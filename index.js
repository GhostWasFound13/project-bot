const ms = require("ms");
  const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { Dashboard } = require("./handlers/dashboard");
const KazagumoClient = require("./handlers/manager/KazagumoClient");
 const { I18n } = require("@hammerhq/localization")
const client = new Client({
    shards: "auto",
  rest: { timeout: ms("1m") },
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ],
    allowedMentions: { parse: ["users", "roles"] },
});

client.config = require("./settings/config.js");
client.prefix = client.config.PREFIX;
client.owner = client.config.OWNER_ID;
client.color = client.config.EMBED_COLOR;
if(!client.token) client.token = client.config.TOKEN;
client.i18n = new I18n(client.config.LANGUAGE);
//require('http').createServer((req, res) => res.end('Ready.')).listen(3000);
client.manager = new KazagumoClient(client);
client.dashboard = new Dashboard(client);

["aliases", "commands", "premiums", "slash"].forEach(x => client[x] = new Collection());
["loadCommand", "loadEvent", "loadPlayers", "loadSlashCommand","loadNode","loadDatabase", "loadHelper"].forEach(x => require(`./handlers/${x}`)(client));
client.dashboard.init();
client.login(client.token);