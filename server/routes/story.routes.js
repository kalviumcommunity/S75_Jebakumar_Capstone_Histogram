import express from 'express';
import { getAllStories, createStory } from '../controllers/story.controller.js';

const router = express.Router();

router.get('/', getAllStories);
router.post('/', createStory);

export default router;
