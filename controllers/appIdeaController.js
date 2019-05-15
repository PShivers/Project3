const AppIdea = require("../models/appIdeaModel.js");

const AppIdeaController = {
  index: async (req, res) => {
    try {
      const appIdeas = await AppIdea.find({});
      res.json(appIdeas);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const appIdeaId = req.params.id;
      const appIdea = await AppIdea.findById(appIdeaId);
      res.json(appIdea);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newAppIdea = req.body;
      const savedAppIdea = await AppIdea.create(newAppIdea);
      res.json(savedAppIdea);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const appIdeaId = req.params.id;
      const updatedAppIdea = req.body;
      const savedappIdea = await AppIdea.findByIdAndUpdate(
        appIdeaId,
        updatedAppIdea,
        { new: true }
      );
      res.json(savedappIdea);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const appIdeaId = req.params.id;
      await AppIdea.findByIdAndRemove(appIdeaId);
      res.json({
        msg: "Successfully Deleted"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = AppIdeaController;
