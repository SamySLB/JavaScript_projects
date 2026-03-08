import Carrinho from "../models/Carrinho.js";

export async function listarCarrinho(req, res) {

  const itens = await Carrinho.find();

  res.json(itens);

}

export async function adicionarCarrinho(req, res) {

  const item = await Carrinho.create(req.body);

  res.status(201).json(item);

}