const express = require("express");
const router = express.Router();

router.use(require("./appIdeaRoutes"));
router.use(require("./ideaistRoutes"));

module.exports = router;
