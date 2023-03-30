const { Kazagumo } = require("kazagumo");
const { Connectors } = require("shoukaku");
const Spotify = require('kazagumo-spotify');

const config = require("./../../settings/config.js");

module.exports = class KazagumoClient extends Kazagumo {
    constructor(client) {
        super({
            plugins: true [
                new Spotify({
                    clientId: "bf5ee2a72bae40ffadc71a47280e5ff9",
                    clientSecret: "053469ffeb3844079fab734ebf3090c2",
                    playlistPageLimit: 1,                    albumPageLimit: 1,
                    searchLimit: 25,
                    searchMarket: 'UA',
                })
            ],
            defaultSearchEngine: "youtube_music",
            send: (guildId, payload) => {
                const guild = client.guilds.cache.get(guildId);
                if (guild) guild.shard.send(payload);
            }
        }, new Connectors.DiscordJS(client), client.config.NODES, client.config.SHOUKAKU_OPTIONS);
}

              };

