import Story from '../models/story.model.js';

export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    console.error('Error fetching stories:', err);
    res.status(500).json({ message: 'Failed to fetch stories' });
  }
};

export const createStory = async (req, res) => {
  try {
    const { placeId, userId, title, content } = req.body;

    if (!placeId || !userId || !title || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const story = new Story({ place: placeId, user: userId, title, content });
    await story.save();

    res.status(201).json({ message: "Story created successfully", story });
  } catch (error) {
    console.error("Error creating story:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

