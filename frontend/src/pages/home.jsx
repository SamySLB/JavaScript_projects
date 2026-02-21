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
  const scrollRef = useRef(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const response = await api.get("/produtos");
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

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const arrowStyle = {
    width: "40px",
    background: "linear-gradient(to right, rgba(213, 210, 206, 0.6), transparent)",
    border: "none",
    zIndex: 2,
    transition: "all 0.3s ease"
    
};

const arrowSet = {
      fontSize: "2rem",
      color:" #3a2b21",
      fontWeight: "bold"
  
}
  return (
    <>
      <Navbar />

      <Hero onConfiraClick={scrollParaProdutos} />

      <section
        ref={produtosRef}
        className="py-5 d-flex align-items-center"
        style={{
          backgroundColor: "#bb7753",
          minHeight: "100vh",
        }}
      >
        <div className="container position-relative">

          {loading ? (
            <p className="text-center text-white">
              Carregando produtos...
            </p>
          ) : (
            <div className="position-relative">

              {/* left */}
              <button
                onClick={() => scroll("left")}
                className="btn position-absolute top-50 start-0 translate-middle-y"
                style={arrowStyle}
              >
               <span style={arrowSet}>
              {"<"}
            </span>
              </button>
               {/* right */}
                      <button
            onClick={() => scroll("right")}
            className="btn position-absolute top-50 end-0 translate-middle-y"
            style={arrowStyle}
          >
            <span style={arrowSet}>
             {">"}
            </span>
          </button>
            
              <div
                ref={scrollRef}
                className="d-flex flex-nowrap gap-4 overflow-hidden px-5"
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
                      descricao={produto.descricao}
                    />
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;