import { useEffect, useState, useRef } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ProductCard from "../components/productCard";
import Footer from "../components/Footer";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const produtosRef = useRef(null);

 useEffect(() => {
  async function buscarProdutos() {
    try {
      const response = await api.get("/produtos");

      console.log("RESPOSTA COMPLETA:", response);
      console.log("DATA:", response.data);

      setProdutos(response.data);

    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }

    buscarProdutos();
  }, []);

  const scrollParaProdutos = () => {
    produtosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <Hero onConfiraClick={scrollParaProdutos} />

      <section
        ref={produtosRef}
        className="container-fluid py-5 bg-light"
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Destaques
          </h2>

          {loading ? (
            <p className="text-center">Carregando produtos...</p>
          ) : (
            <div
              className="d-flex flex-nowrap overflow-auto gap-4 pb-3"
              style={{ scrollBehavior: "smooth" }}
            >
              {produtos.map((produto) => (
                <div
                 key={produto._id}
                 className="flex-shrink-0"
                  style={{ width: "280px" }}
                >
                <ProductCard
                  nome={produto.nome}
                   preco={produto.preco}
                    imagem={produto.imagem}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;