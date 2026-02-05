const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 API da Loja de Roupas rodando!');
});

app.listen(3000, () => {
  console.log('🔥 Servidor rodando em http://localhost:3000');
});