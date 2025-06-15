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
