import SavedPlace from '../models/saved.model.js';

export const getAllSavedPlaces = async (req, res) => {
  try {
    const saved = await SavedPlace.find();
    res.status(200).json(saved);
  } catch (err) {
    console.error('Error fetching saved places:', err);
    res.status(500).json({ message: 'Failed to fetch saved places' });
  }
};

export const createSavedPlace = async (req, res) => {
  try {
    const { user, place, note, pinnedAt } = req.body;
    const newSavedPlace = new SavedPlace({ user, place, note, pinnedAt });
    await newSavedPlace.save();
    res.status(201).json(newSavedPlace);
  } catch (err) {
    console.error('Error saving place:', err);
    res.status(500).json({ message: 'Failed to save place' });
  }
};
