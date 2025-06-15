import express from 'express';
import { getAllSavedPlaces } from '../controllers/savedPlace.controller.js';

const router = express.Router();
router.get('/', getAllSavedPlaces);
export default router;