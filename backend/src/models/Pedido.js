import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  itens: [
    {
      produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
      },
      quantidade: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ['pendente', 'pago', 'cancelado'],
    default: 'pendente'
  },
  pagamento: {
    metodo: String, 
    pagoEm: Date,
    transacaoId: String
  }
}, { timestamps: true });


export default mongoose.model('Pedido', pedidoSchema);
