import mongoose from "mongoose";

const CarrinhoSchema = new mongoose.Schema({

  produtoId: String,
  nome: String,
  preco: Number,
  imagem: String,
  descricao: String

});

export default mongoose.model("Carrinho", CarrinhoSchema);