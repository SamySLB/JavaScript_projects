import { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "./productCard";

function Catalog({ category }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const response = await api.get("/produtos", {
          params: { categoria: category },
        });
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }


    buscarProdutos();
  }, [category]);

  if (loading) {
    return <p className="text-center mt-5">Carregando...</p>;
  }

  return (
    <div className="container py-5">
      <div className="row g-4">
        {produtos.map((produto) => (
          <div key={produto._id} className="col-md-3">
            <ProductCard {...produto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;