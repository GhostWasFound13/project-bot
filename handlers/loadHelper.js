module.exports = (client) => {
   // require("./Database/loadDatabase.js")(client);
    require("./helpers/crash.js")(client)
    console.log('helpers Events Loaded!');
};