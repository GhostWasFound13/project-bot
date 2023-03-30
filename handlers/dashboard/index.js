const { client, Events } = require("discord.js");

const { createApp } = require("./utils/createApp");

class Dashboard {
   constructor(client) {
      this.client = client;
   }

   init() {
      const initialize = () => {
         try {
            const app = createApp(this.client);

            app.listen(3030, () =>
console.log(
                  `[WEB] | Dashboard initialized at: localhost:3030`
               )
            );
         } catch (err) {
            console.error(err);
         }
      };

      if (!this.client.isReady())
         this.client.once(Events.ClientReady, () => initialize());
      else initialize();
   }
}

module.exports = { Dashboard };
