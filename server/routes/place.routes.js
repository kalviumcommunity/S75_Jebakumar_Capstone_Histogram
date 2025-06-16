import express from 'express';
import { getAllPlaces, createPlace, updatePlace } from '../controllers/place.controller.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.post("/", createPlace);
router.put('/:id', updatePlace);


export default router;
