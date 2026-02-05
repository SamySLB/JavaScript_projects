import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rota de teste
app.get('/', (req, res) => {
  res.send('🚀 API da Loja de Roupas funcionando!');
});

export default app;
