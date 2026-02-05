import mongoose from 'mongoose';

export async function connectDB() {
  try {
    console.log('DEBUG URI:', process.env.MONGO_URI); // 👈 linha de teste
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado com sucesso');
  } catch (error) {
    console.error('❌ Erro ao conectar no MongoDB:', error.message);
    process.exit(1);
  }
}