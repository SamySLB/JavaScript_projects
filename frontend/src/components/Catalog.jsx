import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/api";
import ProductCard from "./productCard";

function Catalog({ category }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  // função para normalizar texto
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const params = { categoria: category };

        const response = await api.get("/produtos", { params });
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

  // filtro de busca
  let filteredProducts = produtos;

  if (searchTerm) {
    const normalizedSearch = normalizeText(searchTerm);

    const exactMatch = produtos.find(
      (produto) => normalizeText(produto.nome) === normalizedSearch
    );

    if (exactMatch) {
      filteredProducts = [exactMatch];
    } else {
      filteredProducts = produtos.filter((produto) =>
        normalizeText(produto.nome).includes(normalizedSearch)
      );
    }
  }

  if (!filteredProducts.length) {
    return (
      <p className="text-center mt-5">
        Nenhum produto encontrado{searchTerm ? ` para "${searchTerm}"` : ""}.
      </p>
    );
  }

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#5C4033', minHeight: '100vh', width: '100%' }}>
      <div className="row g-4">
        {filteredProducts.map((produto) => (
          <div key={produto._id} className="col-md-3">
            <ProductCard {...produto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;