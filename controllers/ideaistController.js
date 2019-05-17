const Ideaist = require("../models/ideaistModel.js");

const IdeaistController = {
  index: async (req, res) => {
    try {
      const ideaists = await Ideaist.find({});
      res.json(ideaists);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const ideaistId = req.params.id;
      const ideaist = await Ideaist.findById(ideaistId);
      res.json(ideaist);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      console.log(req.body)
      const newIdeaist = req.body;
      const savedIdeaist = await Ideaist.create(newIdeaist);
      res.json(savedIdeaist);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const ideaistId = req.params.id;
      const updatedIdeaist = req.body;
      const savedIdeaist = await Ideaist.findByIdAndUpdate(
        ideaistId,
        updatedIdeaist,
        { new: true }
      );
      res.json(savedIdeaist);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const ideaistId = req.params.id;
      await Ideaist.findByIdAndRemove(ideaistId);
      res.json({
        msg: "Successfully Deleted"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = IdeaistController;
