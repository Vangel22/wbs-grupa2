const mongoose = require("mongoose");

const uri =
  "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/grupa-4007?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
