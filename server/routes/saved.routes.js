import express from 'express';
import { getAllSavedPlaces, createSavedPlace, updateSavedPlace } from '../controllers/saved.controller.js';

const router = express.Router();

router.get('/', getAllSavedPlaces);
router.post('/', createSavedPlace);
router.put('/:id', updateSavedPlace);


export default router;
