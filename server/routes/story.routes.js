import express from 'express';
import { getAllStories, createStory, updateStory } from '../controllers/story.controller.js';
import { getStoriesByUser, getStoriesWithDetails } from '../controllers/story.controller.js';

const router = express.Router();

router.get('/', getAllStories);
router.post('/', createStory);
router.put('/:id', updateStory);

router.get('/user/:userId', getStoriesByUser);
router.get('/story-details', getStoriesWithDetails);

export default router;
