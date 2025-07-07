import mongoose from 'mongoose';
import SavedPlace from '../models/saved.model.js';

export const createSavedPlace = async (req, res) => {
  try {
    const { user, place, notes, pinnedAt } = req.body;

    if (!user || !place) {
      return res.status(400).json({ message: 'User and place are required' });
    }

    if (
      !mongoose.Types.ObjectId.isValid(user) ||
      !mongoose.Types.ObjectId.isValid(place)
    ) {
      return res.status(400).json({ message: 'Invalid user or place ID' });
    }

    const newSavedPlace = new SavedPlace({ user, place, notes, pinnedAt });
    await newSavedPlace.save();

    res.status(201).json({
      message: 'Place saved successfully',
      savedPlace: newSavedPlace
    });
  } catch (err) {
    console.error('Error saving place:', err);
    res.status(500).json({ message: 'Failed to save place' });
  }
};

export const updateSavedPlace = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid saved place ID' });
    }

    const updated = await SavedPlace.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Saved place not found' });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating saved place:', err);
    res.status(500).json({ message: 'Failed to update saved place' });
  }
};

export const getSavedPlacesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const savedPlaces = await SavedPlace.find({ user: userId }).populate('place', 'name coordinates wikipediaUrl description');
    res.status(200).json(savedPlaces);
  } catch (err) {
    console.error('Error fetching saved places by user:', err);
    res.status(500).json({ message: 'Failed to fetch saved places' });
  }
};

export const getAllSavedPlaces = async (req, res) => {
  try {
    const saved = await SavedPlace.find()
      .populate('user', 'username')
      .populate('place', 'name coordinates wikipediaUrl');

    res.status(200).json(saved);
  } catch (err) {
    console.error('Error fetching saved places:', err);
    res.status(500).json({ message: 'Failed to fetch saved places' });
  }
};
