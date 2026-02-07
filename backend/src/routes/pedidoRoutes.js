import { Router } from 'express';
import { autenticar } from '../middlewares/authMiddleware.js';
import { criarPedido, meusPedidos } from '../controllers/pedidoController.js';

const router = Router();

router.post('/', autenticar, criarPedido);
router.get('/meus', autenticar, meusPedidos);

export default router;