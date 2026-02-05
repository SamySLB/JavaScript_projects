import Usuario from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// REGISTER
export async function cadastrar(req, res) {
  try {
    const { email, senha, role } = req.body;

    const existe = await Usuario.findOne({ email });
    if (existe) {
      return res.status(400).json({ erro: 'Usuário já existe' });
    }

    const hash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      email,
      senha: hash,
      role: role || 'user'
    });

    return res.status(201).json({
      sucesso: true,
      usuario: {
        id: usuario._id,
        email: usuario.email,
        role: usuario.role
      }
    });

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao criar usuário' });
  }
}

// LOGIN
export async function login(req, res) {
  try {
    const { email, senha } = req.body;

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

    return res.json({ token });

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao fazer login' });
  }
}