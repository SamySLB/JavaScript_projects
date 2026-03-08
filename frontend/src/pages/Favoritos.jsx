import { useEffect, useState } from "react";
import api from "../api/api";

function Favoritos() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    async function buscarFavoritos() {

      try {

        const response = await api.get("/favoritos");

        setProdutos(response.data);

      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }

    }

    buscarFavoritos();

  }, []);

  return (

    <div className="container mt-5">

      <h2>Seus Favoritos</h2>

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

export default Favoritos;