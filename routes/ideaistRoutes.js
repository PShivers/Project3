const express = require('express');
const router = express.Router();
const ideaistController = require('../controllers/ideaistController.js');

router.get('/users', ideaistController.index);
router.post('/users', ideaistController.create);

router.get('/users/:id', ideaistController.show);
router.put('/users/:id', ideaistController.update);
router.delete('/users/:id', ideaistController.delete);

module.exports = router;
