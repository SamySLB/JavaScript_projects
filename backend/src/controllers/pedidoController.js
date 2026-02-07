import Pedido from '../models/Pedido.js';

// CRIAR PEDIDO
export async function criarPedido(req, res) {
  try {
    if (!req.usuario || !req.usuario.id) {
      return res.status(401).json({ erro: 'Usuário não autenticado' });
    }

    if (!req.body) {
      return res.status(400).json({ erro: 'Body não enviado' });
    }

    const itens = req.body.itens || req.body.produtos;
    const { total } = req.body;

    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ erro: 'Pedido sem itens' });
    }

    if (total === undefined) {
      return res.status(400).json({ erro: 'Total obrigatório' });
    }

    const pedido = await Pedido.create({
      usuario: req.usuario.id,
      itens,
      total
    });

    return res.status(201).json(pedido);

  } catch (error) {
    console.error('ERRO AO CRIAR PEDIDO:', error);
    return res.status(500).json({ erro: 'Erro ao criar pedido' });
  }
}

// LISTAR PEDIDOS DO USUÁRIO
export async function meusPedidos(req, res) {
  try {
    const pedidos = await Pedido.find({ usuario: req.usuario.id })
      .populate('itens.produto', 'nome preco');

    return res.json(pedidos);

  } catch (error) {
    console.error('ERRO AO LISTAR PEDIDOS:', error);
    return res.status(500).json({ erro: 'Erro ao listar pedidos' });
  }
}