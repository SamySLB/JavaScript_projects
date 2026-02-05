export function tratarErro(res, error, mensagemPadrao) {
  if (error.code === 11000) {
    return res.status(400).json({
      erro: 'Código do produto já existe'
    });
  }

  return res.status(500).json({
    erro: mensagemPadrao || 'Erro interno do servidor'
  });
}