const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const AppIdea = new Schema({
  name: String,
  description: String
});
 
module.exports = mongoose.model('AppIdea', AppIdea);