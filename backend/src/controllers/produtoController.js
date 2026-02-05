import Produto from '../models/Produto.js';

export async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
}

export async function criarProduto(req, res) {
  try {
    const produto = await Produto.create(req.body);

    res.status(201).json({
      sucesso: true,
      dados: produto
    });
  } catch (error) {
    res.status(400).json({
      erro: 'Erro ao criar produto',
      detalhes: error.message
    });
  }
}