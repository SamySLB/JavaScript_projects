import express from "express";
import { adicionarCarrinho, listarCarrinho } from "../controllers/CarrinhoController.js";

const router = express.Router();

router.get("/", listarCarrinho);
router.post("/", adicionarCarrinho);

export default router;