const express = require("express");
const router = express.Router();

router.use(require("./appIdeaRoutes"));

module.exports = router;