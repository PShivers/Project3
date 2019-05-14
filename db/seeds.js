const AppIdea = require('../models/AppIdea.js')

// using Promises
AppIdea.deleteMany().then(() => {
  const luke = new AppIdea({name: 'Luke', description: 'Jedi'})
  return luke.save()
}).then(() => {
  const darth = new AppIdea({name: 'Darth Vader', description: 'Father of Luke'})
  return darth.save()
})