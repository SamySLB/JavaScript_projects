import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";


function ProductCard({ _id, nome, preco, imagem, descricao }) {

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const produto = {
    produtoId: _id,
    nome,
    preco,
    imagem,
    descricao
  };

  async function addToCart(e) {
    e.stopPropagation();

    try {
      await api.post("/carrinho", produto);

      setType("success");
      setMessage("Produto adicionado ao carrinho!");

      setTimeout(() => {
        setMessage("");
        navigate("/carrinho");
      }, 1500);

    } catch (error) {
      console.error("Erro:", error.response?.data || error);

      setType("danger");
      setMessage("Erro ao adicionar ao carrinho.");

      setTimeout(() => setMessage(""), 2000);
    }
  }

  async function addToFavorites(e) {
    e.stopPropagation();

    try {
      await api.post("/favoritos", produto);

      setType("success");
      setMessage("Produto adicionado aos favoritos!");

      setTimeout(() => {
        setMessage("");
        navigate("/favoritos");
      }, 1500);

    } catch (error) {
      console.error("Erro:", error.response?.data || error);

      setType("danger");
      setMessage("Erro ao favoritar produto.");

      setTimeout(() => setMessage(""), 2000);
    }
  }

  return (
    <>
      {/* ALERTA */}
      {message && (
        <div
          className={`alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`}
          style={{
            zIndex: 9999,
            minWidth: "300px",
            textAlign: "center"
          }}
        >
          {message}
        </div>
      )}

    
      <div
        className="shadow-sm d-flex flex-column"
        style={{
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "white",
          height: "100%",
          cursor: "pointer"
        }}
        onClick={() => setShowModal(true)}
      >

        <div
          style={{
            aspectRatio: "1 / 1",
            overflow: "hidden",
            backgroundColor: "#fff"
          }}
        >
          <img
            src={imagem || "https://via.placeholder.com/150"}
            alt={nome}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>

        <div className="p-3 d-flex flex-column">

          <h6 className="fw-semibold mb-1" style={{ color: "#9a6949" }}>
            {nome}
          </h6>

          <p
            className="mb-3"
            style={{
              fontSize: "0.85rem",
              color: "#bb7753",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "40px"
            }}
          >
            {descricao}
          </p>

          <div className="mt-auto text-end">
            <span
              className="fw-bold"
              style={{ color: "#bb7753", fontSize: "1rem" }}
            >
              R$ {Number(preco).toFixed(2)}
            </span>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">{nome}</h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <div className="modal-body">
                <div className="row">

                  <div className="col-md-6 text-center">
                    <img
                      src={imagem}
                      alt={nome}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "350px",
                        objectFit: "contain"
                      }}
                    />
                  </div>

                  <div className="col-md-6">

                    <p style={{ color: "#555" }}>{descricao}</p>

                    <h4 style={{ color: "#bb7753" }}>
                      R$ {Number(preco).toFixed(2)}
                    </h4>

                    <div className="mt-4 d-flex gap-3">

                      <button
                        className="btn flex-grow-1"
                        style={{
                          backgroundColor: "#bb7753",
                          color: "white"
                        }}
                        onClick={addToCart}
                      >
                        🛒 Adicionar ao carrinho
                      </button>

                      <button
                        className="btn btn-outline-danger"
                        onClick={addToFavorites}
                      >
                        ❤️ Favoritar
                      </button>

                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;