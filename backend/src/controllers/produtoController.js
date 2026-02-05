import Produto from '../models/Produto.js';

export async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    return res.json(produtos);
  } catch (error) {
    return res.status(500).json({
      erro: 'Erro ao buscar produtos'
    });
  }
}

export async function criarProduto(req, res) {
  try {
    const { codigo, nome, categoria, dimensao, preco, estoque } = req.body;

    // campos obrigatórios
    const obrigatorios = { codigo, nome, categoria, dimensao };

    for (const [campo, valor] of Object.entries(obrigatorios)) {
      if (!valor?.trim()) {
        return res.status(400).json({
          erro: `Campo ${campo} é obrigatório`
        });
      }
    }

    // validações numéricas
    if (preco === undefined || preco <= 0) {
      return res.status(400).json({
        erro: 'Preço deve ser maior que zero'
      });
    }

    if (estoque === undefined || estoque < 0) {
      return res.status(400).json({
        erro: 'Estoque não pode ser negativo'
      });
    }

    const produto = await Produto.create({
      codigo,
      nome,
      categoria,
      dimensao,
      preco,
      estoque
    });

    return res.status(201).json({
      sucesso: true,
      dados: produto
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        erro: 'Código do produto já existe'
      });
    }

    return res.status(500).json({
      erro: 'Erro ao criar produto'
    });
  }
}