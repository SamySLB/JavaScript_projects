import Usuario from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/* =========================
   REGISTER
========================= */
export async function cadastrar(req, res) {
  try {
    const {
      nome,
      email,
      telefone,
      cep,
      endereco,
      senha,
      role
    } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        erro: 'Nome, email e senha são obrigatórios'
      });
    }

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return res.status(400).json({
        erro: 'Email já cadastrado'
      });
    }

    const hash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      email,
      telefone,
      cep,
      endereco,
      senha: hash,
      role: role || 'user'
    });

    return res.status(201).json({
      sucesso: true,
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: error.message });
  }
}

/* =========================
   LOGIN
========================= */
export async function login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        erro: 'Email e senha são obrigatórios'
      });
    }

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        role: usuario.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({
      token,
      usuario: {
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: 'Erro ao fazer login' });
  }
}