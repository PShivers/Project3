const express = require("express");
const router = express.Router();

router.use(require("./appIdeaRoutes"));
router.use(require("./ideaistRoutes"));
router.use(require("./devsRoutes"));

module.exports = router;
