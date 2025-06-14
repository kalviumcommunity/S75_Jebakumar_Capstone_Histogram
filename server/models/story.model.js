import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  images: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Story', storySchema);
