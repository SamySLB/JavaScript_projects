import Produto from '../models/Produto.js';
import { tratarErro } from '../utils/tratarErro.js';
import { validarProduto } from '../utils/validarProduto.js';

export async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find({ categoria:{
        $in: ["women's clothing", "men's clothing"] 
    }
       });
    return res.json(produtos);
  } catch (error) {
    return tratarErro(res, error, 'Erro ao buscar produtos');
  }
}

export async function criarProduto(req, res) {
  try {
    const erroValidacao = validarProduto(req.body);
    if (erroValidacao) {
      return res.status(400).json({ erro: erroValidacao });
    }

    const produto = await Produto.create(req.body);

    return res.status(201).json({
      sucesso: true,
      dados: produto
    });

  } catch (error) {
    return tratarErro(res, error, 'Erro ao criar produto');
  }
}

export async function atualizarProduto(req, res) {
  try {
    const erroValidacao = validarProduto(req.body);
    if (erroValidacao) {
      return res.status(400).json({ erro: erroValidacao });
    }

    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    return res.json({
      sucesso: true,
      dados: produto
    });

  } catch (error) {
    return tratarErro(res, error, 'Erro ao atualizar produto');
  }
}

export async function deletarProduto(req, res) {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);

    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    return res.json({
      sucesso: true,
      mensagem: 'Produto removido com sucesso'
    });

  } catch (error) {
    return tratarErro(res, error, 'Erro ao deletar produto');
  }
}