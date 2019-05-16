const Devs = require('../models/devsModel.js');

const DevsController = {
  index: async (req, res) => {
    try {
      const devs = await Devs.find({});
      res.json(devs);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const devsId = req.params.id;
      const devs = await Devs.findById(devsId);
      res.json(devs);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newDevs = req.body;
      const savedDevs = await Devs.create(newDevs);
      res.json(savedDevs);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const devsId = req.params.id;
      const updatedDevs = req.body;
      const savedDevs = await Devs.findByIdAndUpdate(devsId, updatedDevs, {
        new: true
      });
      res.json(savedDevs);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const devsId = req.params.id;
      await Devs.findByIdAndRemove(devsId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = DevsController;
