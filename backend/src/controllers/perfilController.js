import Usuario from "../models/Usuario.js";

export async function perfil(req, res) {
  try {
    if (!req.usuario?.id) {
      return res.status(401).json({ erro: "Não autorizado" });
    }

    const usuario = await Usuario.findById(req.usuario.id)
      .select("-senha -__v")
      .lean();

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    return res.status(200).json({
      sucesso: true,
      dados: usuario
    });

  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    return res.status(500).json({
      sucesso: false,
      erro: "Erro interno do servidor"
    });
  }
}