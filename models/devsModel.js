const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Devs = new Schema({
  name: String,
  apps: String
});

module.exports = mongoose.model("Devs", Devs);
