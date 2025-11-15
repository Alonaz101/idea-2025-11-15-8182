const express = require('express');
const router = express.Router();
const moodController = require('../controllers/moodController');

router.post('/', moodController.submitMood);
router.get('/', moodController.getRecipesByMood);

module.exports = router;
