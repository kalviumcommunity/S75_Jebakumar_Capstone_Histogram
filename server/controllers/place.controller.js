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
    const { name, latitude, longitude } = req.body;

    if (!name || !latitude || !longitude) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const place = new Place({ name, location: { coordinates: [longitude, latitude] } });
    await place.save();

    res.status(201).json({ message: "Place created successfully", place });
  } catch (error) {
    console.error("Error creating place:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

