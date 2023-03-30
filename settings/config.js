require("dotenv").config();
const { resolve } = require("path");
module.exports = {
    TOKEN: process.env.TOKEN || "MTAyNTY0NjY2MzU1OTI4MjcxOA.Gf68qc.ahKbefj7e5UB9Etg1PTRph0x2HqWwoF6qZQBrE",
    PREFIX: process.env.PREFIX || "#",
MONGO_URI: process.env.MONGO_URI || "mongodb+srv://YassineHzz:YassineHzz@cluster0.vo589.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // your mongo uri
    ENABLE_MESSAGE: true,
    AUTO_DEPLOY: true,
    OWNER_ID: process.env.OWNER_ID || "YOUR_DISCORD_OWNER_ID",
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001",
    SEARCH_ENGINE: process.env.SEARCH_ENGINE || "youtube", // default -- 'youtube' | 'soundcloud' | 'youtube_music'
    LEAVE_EMPTY: process.env.LEAVE_EMPTY || "120000",
  SHOUKAKU_OPTIONS: {
    moveOnDisconnect: true,
    resumable: true,
    resumableTimeout: 600,
    reconnectTries: Infinity,
    restTimeout: 3000
  },
LANGUAGE: {
      defaultLocale:  "en", // "en" = default language
      directory: resolve("./languages"), // <= location of language
    },
    NODES: [ /*
        {
name: process.env.NODES_NAME || 'NanoSpace',
            url: process.env.NODES_URL || 'lavalink.fluiddev.xyz:80',
            auth: process.env.EMBED_AUTH || 'fluiddev',
            secure: false
        },*/
      {
       url: /*process.env.NODE_URL ||*/'lava1.horizxon.studio:80',
      name: /*process.env.NODE_NAME ||*/ 'Node_1',
      auth: /* process.env.NODE_AUTH ||*/ 'horizxon.studio',
      //secure: parseBoolean(process.env.NODE_SECURE || 'false'), 
        secure:  false
      }
    ]
}
