const express = require('express');
const router = express.Router();
const appIdeaController = require('../controllers/appIdeaController.js');

router.get('/appIdeas', appIdeaController.index);
router.post('/appIdeas', appIdeaController.create);
router.get('appIdeas/:id', appIdeaController.show);
router.put('appIdeas/:id', appIdeaController.update);
router.delete('appIdeas/:id', appIdeaController.delete);

module.exports = router;
