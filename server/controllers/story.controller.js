import mongoose from 'mongoose';
import Story from '../models/story.model.js';

export const createStory = async (req, res) => {
  try {
    const { placeId, userId, title, content } = req.body;

    if (!placeId || !userId || !title || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (
      !mongoose.Types.ObjectId.isValid(placeId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(400).json({ error: 'Invalid placeId or userId' });
    }

    const story = new Story({ place: placeId, user: userId, title, content });
    await story.save();

    res.status(201).json({ message: 'Story created successfully', story });
  } catch (error) {
    console.error('Error creating story:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateStory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid story ID' });
    }

    const updatedStory = await Story.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedStory) {
      return res.status(404).json({ message: 'Story not found' });
    }

    res.status(200).json(updatedStory);
  } catch (err) {
    console.error('Error updating story:', err);
    res.status(500).json({ message: 'Failed to update story' });
  }
};

export const getStoriesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const stories = await Story.find({ user: userId }).populate('place', 'name coordinates');
    res.status(200).json(stories);
  } catch (err) {
    console.error('Error fetching user stories:', err);
    res.status(500).json({ message: 'Failed to fetch user stories' });
  }
};

export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find()
      .populate('user', 'username')
      .populate('place', 'name coordinates');
    res.status(200).json(stories);
  } catch (err) {
    console.error('Error fetching stories:', err);
    res.status(500).json({ message: 'Failed to fetch stories' });
  }
};
