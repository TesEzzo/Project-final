const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

const disconnect = async () => {
    await mongoose.disconnect();
}

const models = {
    User: require("./models/User"),
    Club: require("./models/Club"),
    Sport: require("./models/Sport"),
    Space: require("./models/Space"),
    Rating: require("./models/Rating"),
    Event: require("./models/Event"),
    Transaction: require("./models/Transaction"),
}

module.exports = {
    connect,
    disconnect,
    ...models
}