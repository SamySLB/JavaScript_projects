import { Router } from 'express';
import { listarProdutos, criarProduto} from '../controllers/produtoController.js';

const router = Router();

router.get('/', listarProdutos);
router.post('/', criarProduto);

export default router;
