const express = require("express");
const router = express.Router();
const appIdeaController = require("../controllers/appIdeaController.js");

router.get("/appIdeas", appIdeaController.index);
// router.post("/", appIdeaController.create);
// router.get("/:id", appIdeaController.show);
// router.put("/:id", appIdeaController.update);
// router.delete("/:id", appIdeaController.delete);

module.exports = router;
