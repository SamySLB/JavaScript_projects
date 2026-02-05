import { Router } from 'express';
import { cadastrar, login } from '../controllers/authController.js';

const router = Router();

router.post('/register', cadastrar);
router.post('/login', login);

export default router;