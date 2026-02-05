import mongoose from 'mongoose';

const ProdutoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },
    descricao: {
      type: String
    },
    preco: {
      type: Number,
      required: true
    },
    categoria: {
      type: String
    },
    imagem: {
      type: String
    },
    estoque: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Produto', ProdutoSchema);