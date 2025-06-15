import express from 'express';
import { getAllSavedPlaces, createSavedPlace } from '../controllers/saved.controller.js';

const router = express.Router();

router.get('/', getAllSavedPlaces);
router.post('/', createSavedPlace);

export default router;
