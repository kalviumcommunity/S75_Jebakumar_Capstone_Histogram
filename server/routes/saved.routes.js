import express from 'express';
import { getAllSavedPlaces, createSavedPlace, updateSavedPlace } from '../controllers/saved.controller.js';
import { getSavedPlacesByUser } from '../controllers/saved.controller.js';

const router = express.Router();

router.get('/', getAllSavedPlaces);
router.post('/', createSavedPlace);
router.put('/:id', updateSavedPlace);

router.get('/user/:userId', getSavedPlacesByUser);

export default router;
