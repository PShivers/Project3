const AppIdea = require("../models/appIdeaModel.js");
const Ideaist = require("../models/ideaistModel.js");
const Devs = require("../models/devsModel.js");

//devs
Devs.deleteMany()
  .then(() => {
    const Dev1 = new Devs({
      name: "Dev1",
      appsInProgress: []
    });
    return Dev1.save();
  })
  .then(() => {
    const Dev2 = new Devs({
      name: "Dev2",
      appsInProgress: []
    });
    return Dev2.save();
  })
  .then(() => {
    const Dev3 = new Devs({
      name: "Dev3",
      appsInProgress: []
    });
    return Dev3.save();
  });

//ideaist
Ideaist.deleteMany()
  .then(() => {
    const Paul = new Ideaist({
      name: "Paul",
      appIdeas: []
    });
    return Paul.save();
  })
  .then(() => {
    const Joe = new Ideaist({
      name: "Joe",
      appIdeas: []
    });
    return Joe.save();
  })
  .then(() => {
    const Rufio = new Ideaist({
      name: "Rufio",
      appIdeas: []
    });
    return Rufio.save();
  });

//appideas
AppIdea.deleteMany()
  .then(() => {
    const nea = new AppIdea({
      name: "Nea",
      description:
        "Nea is a sleep tracking app that aim to improve sleep quality through data.",
    });
    return nea.save();
  })
  .then(() => {
    const excuses = new AppIdea({
      name: "Excuses, excuses",
      description:
        "Excuses, excuses is a todo list app with a twist. It allows you to put in excuses for any uncompleted items in order to see what kind of lies you tell yourself to get out of chores."
    });
    return excuses.save();
  });
