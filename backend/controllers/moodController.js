const Recipe = require('../models/Recipe');

// Simple manual mood input endpoint
exports.submitMood = (req, res) => {
  const { moodId } = req.body;
  // Here we would normally store mood input user data for now just acknowledge
  res.status(200).json({ message: `Mood received: ${moodId}` });
};

// Get recipes matching mood tag
exports.getRecipesByMood = async (req, res) => {
  const moodId = req.query.mood;
  try {
    if (!moodId) return res.status(400).json({ message: 'Mood query parameter required' });

    const recipes = await Recipe.find({ moodTags: moodId }).limit(20);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
