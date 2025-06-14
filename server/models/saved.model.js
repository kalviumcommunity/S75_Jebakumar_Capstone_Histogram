import mongoose from 'mongoose';

const savedPlaceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  notes: { type: String, trim: true },
  pinnedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('SavedPlace', savedPlaceSchema);
