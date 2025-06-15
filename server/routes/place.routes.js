import express from 'express';
import { getAllPlaces } from '../controllers/place.controller.js';

const router = express.Router();
router.get('/', getAllPlaces);
export default router;
