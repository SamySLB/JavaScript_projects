import { Router } from "express";
import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "../controllers/produtoController.js";

import { autenticar, apenasAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

// 🔓 Público
router.get("/", listarProdutos);

// 🔐 Admin
router.post("/", autenticar, apenasAdmin, criarProduto);
router.put("/:id", autenticar, apenasAdmin, atualizarProduto);
router.delete("/:id", autenticar, apenasAdmin, deletarProduto);

export default router;