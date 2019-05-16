const express = require('express');
const router = express.Router();
const devsController = require('../controllers/devsController.js');

router.get('/devs', devsController.index);
router.post('/devs', devsController.create);

router.get('/devs/:id', devsController.show);
router.put('/devs/:id', devsController.update);
router.delete('/devs/:id', devsController.delete);

module.exports = router;
