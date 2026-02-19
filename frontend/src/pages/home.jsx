import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";
import Hero from "../components/hero"; 
import ProductCard from "../components/productCard";
import Footer from "../components/Footer";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const { data } = await api.get("/produtos");

        
        setProdutos(data.dados);


      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div className="container my-5">
        <h3 className="mb-4">Destaques</h3>

        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="row">
            {produtos.map((produto) => (
              <ProductCard
                key={produto._id}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;