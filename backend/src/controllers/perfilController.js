import Usuario from '../models/Usuario.js';

export async function perfil(req, res) {
  try {
    const usuario = await Usuario.findById(req.usuario.id)
      .select('-senha');

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar perfil' });
  }
}