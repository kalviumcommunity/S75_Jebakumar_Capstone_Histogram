const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import userRoutes from './routes/user.routes.js';
import placeRoutes from './routes/place.routes.js';
import storyRoutes from './routes/story.routes.js';
import savedRoutes from './routes/saved.routes.js';

app.use('/api/users', userRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/saved-places', savedRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Histogram backend running");
});

app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
});
