import { useEffect, useState } from "react";
import api from "../api/api";

function Carrinho() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    async function buscarCarrinho() {

      try {

        const response = await api.get("/carrinho");

        setProdutos(response.data);

      } catch (error) {
        console.error("Erro ao buscar carrinho:", error);
      }

    }

    buscarCarrinho();

  }, []);

  return (

    <div className="container mt-5">

      <h2>Seu Carrinho</h2>

      <div className="row">

        {produtos.map((produto) => (

          <div key={produto._id} className="col-md-3">

            <div className="card p-3">

              <img
                src={produto.imagem}
                style={{ height: "150px", objectFit: "contain" }}
              />

              <h6>{produto.nome}</h6>

              <p>R$ {produto.preco}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Carrinho;