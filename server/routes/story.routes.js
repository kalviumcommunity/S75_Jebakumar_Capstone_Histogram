import express from 'express';
import { getAllStories } from '../controllers/story.controller.js';

const router = express.Router();
router.get('/', getAllStories);
export default router;
