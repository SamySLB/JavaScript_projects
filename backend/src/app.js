import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import produtoRoutes from './routes/produtoRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);
app.use('/api/auth', authRoutes);

// rota de teste
app.get('/', (req, res) => {
  res.send('API da Loja de Roupas funcionando!');
});

export default app;
