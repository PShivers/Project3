const express = require("express");
const router = express.Router();
const devsController = require("../controllers/devsController.js");

router.route("/devs").get(devsController.index);
//   .post(ideaistController.create);

// router.route('/:id')
//   .get(ideaistController.show);
//   .put(ideaistController.update);
//   .delete(ideaistController.delete);

module.exports = router;
