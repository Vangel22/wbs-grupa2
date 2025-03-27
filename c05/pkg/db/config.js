const mongoose = require("mongoose");
const { getSection } = require("../config/INDEX.JS");

// const uri =
//   "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/grupa-4007?retryWrites=true&w=majority";

const uri = `mongodb+srv://${getSection("development").MONGO_USERNAME}:${
  getSection("development").MONGO_PASSWORD
}@cluster0.12jzasd.mongodb.net/grupa-4007?retryWrites=true&w=majority`;

// MONGO_USERNAME
// MONGO_PASSWORD
// MONGO_HOST
// MONGO_DB_NAME
// MONGO_OPTIONS

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
