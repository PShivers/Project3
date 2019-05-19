const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const AppIdea = new Schema({
  name: String,
  description: String,
  ownerId: Number
});
 
module.exports = mongoose.model('AppIdea', AppIdea);