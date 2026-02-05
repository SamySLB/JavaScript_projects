export function validarProduto(dados) {
  const { codigo, nome, categoria, dimensao, preco, estoque } = dados;

  const obrigatorios = { codigo, nome, categoria, dimensao };

  for (const [campo, valor] of Object.entries(obrigatorios)) {
    if (!valor || valor.trim() === '') {
      return `Campo ${campo} é obrigatório`;
    }
  }

  if (preco === undefined || preco <= 0) {
    return 'Preço deve ser maior que zero';
  }

  if (estoque === undefined || estoque < 0) {
    return 'Estoque não pode ser negativo';
  }

  return null; 
}