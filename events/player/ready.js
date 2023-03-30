const db  = require("../../settings/database/connect")


module.exports = async (client, name) => {
    console.log(`client | ${name}: Ready!`); 
  client.log("Auto ReConnect Collecting player 24/7 data");
    const maindata = await db.find()
    client.log(`Auto ReConnect found in ${maindata.length} servers!`);
    if (maindata.length === 0) return
    for (let data of maindata) {
        const index = maindata.indexOf(data);
        setTimeout(async () => {
            const channel = client.channels.cache.get(data.text)
            const voice = client.channels.cache.get(data.voice)
            if (!channel || !voice) return data.delete()
            const player = await client.manager.createPlayer({
                guildId: data.guild,
                voiceId: data.voice,
                textId: data.text,
                deaf: true,
              });
            player.twentyFourSeven = true;
            }
            
        ), index * 5000}
};