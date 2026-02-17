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


export async function meusPedidos(req, res) {
  try {
    const pedidos = await Pedido.find({ usuario: req.usuario.id })
      .populate('itens.produto', 'nome preco')
      .sort({ createdAt: -1 });

    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar pedidos' });
  }
}

export async function pagarPedido(req, res) {
  try {
    const { metodo } = req.body;
    const pedido = await Pedido.findById(req.params.id);

    if (!pedido) {
      return res.status(404).json({ erro: 'Pedido não encontrado' });
    }

    if (pedido.status === 'pago') {
      return res.status(400).json({ erro: 'Pedido já está pago' });
    }

    pedido.status = 'pago';
    pedido.pagamento = {
      metodo,
      pagoEm: new Date(),
      transacaoId: `TX-${Date.now()}`
    };

    await pedido.save();

    res.json({ mensagem: 'Pagamento confirmado', pedido });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao processar pagamento' });
  }
}