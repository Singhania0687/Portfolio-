import express from 'express';
import contactController from '../controllers/ContactController';

const router = express.Router();

// Contact form submission route
router.post('/submit-form', contactController.submitForm);

export default router;
