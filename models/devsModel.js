const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Devs = new Schema({
  name: String,
  apps: []
});

module.exports = mongoose.model("Devs", Devs);
