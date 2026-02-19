import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  codigo: {
    type: String,
    unique: true
  },
  nome: String,
  descricao: String,
  preco: Number,
  categoria: String,
  imagem: String
});

export default mongoose.model("Produto", produtoSchema);