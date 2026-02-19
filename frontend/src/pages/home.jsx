import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ProductCard from "../components/productCard";
import Footer from "../components/Footer";

function Home() {

  const produtos = [
    {
      id: 1,
      nome: "Blusa Fashion",
      preco: "199,90",
      imagem: "https://via.placeholder.com/300x350"
    },
    {
      id: 2,
      nome: "Calça Moderna",
      preco: "249,90",
      imagem: "https://via.placeholder.com/300x350"
    },
    {
      id: 3,
      nome: "Saia Elegante",
      preco: "179,90",
      imagem: "https://via.placeholder.com/300x350"
    },
    {
      id: 4,
      nome: "Jaqueta Estilo",
      preco: "299,90",
      imagem: "https://via.placeholder.com/300x350"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="container my-5">
        <h3 className="mb-4">Destaques</h3>

        <div className="row">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;