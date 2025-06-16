import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from './routes/user.routes.js';
import placeRoutes from './routes/place.routes.js';
import storyRoutes from './routes/story.routes.js';
import savedPlaceRoutes from './routes/saved.routes.js';

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/saved-places', savedPlaceRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Histogram backend running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
});
