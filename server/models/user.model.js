import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  hashedPassword: { type: String, required: true },
  savedPlaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }]
}, { timestamps: true });

export default mongoose.model('User', userSchema);
