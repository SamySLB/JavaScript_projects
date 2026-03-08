import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import produtoRoutes from './routes/produtoRoutes.js';
import authRoutes from './routes/authRoutes.js';
import perfilRoutes from './routes/perfilRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import carrinhoRoutes from "./routes/carrinhoRoutes.js";

const app = express();

// middlewares
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// rotas
app.use('/api/auth', authRoutes);
app.use('/api/perfil', perfilRoutes);
app.use("/api/produtos", produtoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use("/api/carrinho", carrinhoRoutes);

// rota de teste
app.get('/', (req, res) => {
  res.send('API da Loja de Roupas funcionando!');
});

export default app;