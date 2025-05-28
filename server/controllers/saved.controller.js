import SavedPlace from '../models/savedPlace.model.js';

export const getAllSavedPlaces = async (req, res) => {
  try {
    const saved = await SavedPlace.find();
    res.status(200).json(saved);
  } catch (err) {
    console.error('Error fetching saved places:', err);
    res.status(500).json({ message: 'Failed to fetch saved places' });
  }
};
