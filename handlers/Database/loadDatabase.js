const mongoose = require('mongoose');
const { MONGO_URI } = require('../../settings/config.js');

module.exports = async (client) => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database!')
    } catch (error) {
      console.log(error)
    }
}