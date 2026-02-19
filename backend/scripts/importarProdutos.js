import mongoose from "mongoose";
import axios from "axios";
import Produto from "../src/models/Produto.js";
import "dotenv/config";

async function importar() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo conectado 🚀");

    const { data } = await axios.get("https://fakestoreapi.com/products");

    const produtosFormatados = data.map((item) => ({
    codigo: item.id.toString(),
    nome: item.title,
    descricao: item.description,
    preco: item.price,
    categoria: item.category,
    imagem: item.image
    }));
    await Produto.deleteMany();
    await Produto.insertMany(produtosFormatados);

    console.log("Produtos importados com sucesso 🎉");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importar();