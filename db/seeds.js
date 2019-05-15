const AppIdea = require("../models/appIdeaModel.js");
const Ideaist = require("../models/ideaistModel.js");

//ideaist
Ideaist.deleteMany().then(() => {
  const nea = new Ideaist({
    name: "Paul",
    appIdeas: "appHole"
  });
  return nea.save();
});

//appideas
AppIdea.deleteMany()
  .then(() => {
    const nea = new AppIdea({
      name: "Nea",
      description:
        "Nea is a sleep tracking app that aim to improve sleep quality through data."
    });
    return nea.save();
  })
  .then(() => {
    const excuses = new AppIdea({
      name: "Excuses, excuses",
      description:
        "Excuses, excuses is a todo list app with a twist. It allows you to put in excuses for any uncompleted items in order to see what kind bullshit you tell yourself to get out of chores."
    });
    return excuses.save();
  });
