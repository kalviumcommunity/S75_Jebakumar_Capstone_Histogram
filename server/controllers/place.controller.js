import mongoose from 'mongoose';
import Place from '../models/place.model.js';

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    console.error('Error fetching places:', err);
    res.status(500).json({ message: 'Failed to fetch places' });
  }
};

export const createPlace = async (req, res) => {
  try {
    const { name, latitude, longitude, wikipediaUrl, description } = req.body;

    if (!name || !latitude || !longitude) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const place = new Place({
      name,
      coordinates: { lat: latitude, lng: longitude },
      wikipediaUrl,
      description
    });

    await place.save();
    res.status(201).json({ message: 'Place created successfully', place });
  } catch (err) {
    console.error('Error creating place:', err);
    res.status(500).json({ message: 'Failed to create place' });
  }
};

export const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid place ID' });
    }

    const updatedPlace = await Place.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.status(200).json(updatedPlace);
  } catch (err) {
    console.error('Error updating place:', err);
    res.status(500).json({ message: 'Failed to update place' });
  }
};
