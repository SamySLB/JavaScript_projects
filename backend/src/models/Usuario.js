import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
});

export default mongoose.model('Usuario', usuarioSchema);