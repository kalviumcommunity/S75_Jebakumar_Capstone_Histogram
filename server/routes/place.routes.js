import express from 'express';
import { getAllPlaces, createPlace } from '../controllers/place.controller.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.post("/", createPlace);

export default router;
