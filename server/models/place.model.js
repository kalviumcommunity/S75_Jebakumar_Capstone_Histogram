import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  wikipediaUrl: { type: String, trim: true },
  description: { type: String, trim: true }
}, { timestamps: true });

export default mongoose.model('Place', placeSchema);
