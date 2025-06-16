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

export const updateSavedPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await SavedPlace.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update saved place' });
  }
};

export const getSavedPlacesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const savedPlaces = await SavedPlace.find({ user: userId });
    res.status(200).json(savedPlaces);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch saved places' });
  }
};

export const getSavedPlacesWithDetails = async (req, res) => {
  try {
    const saved = await SavedPlace.find().populate('user').populate('place');
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch saved places with details' });
  }
};


