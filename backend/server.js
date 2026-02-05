import 'dotenv/config';
import app from './src/app.js';
import { connectDB } from './src/database/db.js';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
