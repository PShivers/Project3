const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Ideaist = new Schema({
  name: String,
  appIdeas: String
});

module.exports = mongoose.model("Ideaist", Ideaist);
