import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      required: [true, 'Código do produto é obrigatório'],
      unique: true,
      trim: true
    },

    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'],
      trim: true
    },

    categoria: {
      type: String,
      required: [true, 'Categoria é obrigatória'],
      trim: true
    },

    dimensao: {
      type: String,
      required: [true, 'Dimensão é obrigatória'],
      trim: true
    },

    preco: {
      type: Number,
      required: [true, 'Preço é obrigatório'],
      min: [0.01, 'Preço deve ser maior que zero']
    },

    estoque: {
      type: Number,
      required: true,
      min: [0, 'Estoque não pode ser negativo']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Produto', produtoSchema);