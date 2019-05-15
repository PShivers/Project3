const express = require("express");
const router = express.Router();
const ideaistController = require("../controllers/ideaistController.js");

router.route("/users").get(ideaistController.index);
//   .post(ideaistController.create);

// router.route('/:id')
//   .get(ideaistController.show);
//   .put(ideaistController.update);
//   .delete(ideaistController.delete);

module.exports = router;
