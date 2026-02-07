import { Router } from 'express';
import { perfil } from '../controllers/perfilController.js';
import { autenticar } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', autenticar, perfil);

export default router;