import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    endereco: "",
    senha: ""
  });

  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleCadastro(e) {
    e.preventDefault();
    setLoading(true);
    setErro("");

    try {
      await api.post("/usuarios/cadastro", formData);

      navigate("/login");
    } catch (error) {
      setErro("Erro ao cadastrar usuário");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row h-100 g-0">

        {/* LADO ESQUERDO */}
        <div
          className="col-lg-5 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#bb7753" }}
        >
          <div style={{ width: "100%", maxWidth: "400px", padding: "40px" }}>

            <h2 className="fw-bold mb-3" style={{ color: "#f4ecec" }}>
              Crie sua conta
            </h2>

            <p style={{ color: "#ffc0a7" }}>
              Faça parte da nossa comunidade fashion
            </p>

            {erro && <div className="alert alert-danger">{erro}</div>}

            <form onSubmit={handleCadastro}>

              <input
                className="form-control mb-3 border-0"
                style={inputStyle}
                placeholder="Nome"
                name="nome"
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3 border-0"
                style={inputStyle}
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3 border-0"
                style={inputStyle}
                placeholder="Telefone"
                name="telefone"
                onChange={handleChange}
              />

              <input
                className="form-control mb-3 border-0"
                style={inputStyle}
                placeholder="CEP"
                name="cep"
                onChange={handleChange}
              />

              <input
                className="form-control mb-3 border-0"
                style={inputStyle}
                placeholder="Endereço"
                name="endereco"
                onChange={handleChange}
              />

              <input
                className="form-control mb-4 border-0"
                style={inputStyle}
                placeholder="Senha"
                name="senha"
                type="password"
                onChange={handleChange}
                required
              />

              <button
                className="btn w-100"
                disabled={loading}
                style={{
                  backgroundColor: "#1c1c1c",
                  color: "white",
                  borderRadius: "10px"
                }}
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>

              <div className="d-flex justify-content-between mt-3">
                <Link to="/login" style={{ color: "#ffc0a7", textDecoration: "none" }}>
                  Já tenho conta
                </Link>
              </div>

            </form>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div
          className="col-lg-7 d-none d-lg-block"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/background/20240717/original/pngtree-clothes-on-hangers-in-shop-mens-wear-hanger-photo-picture-image_9745339.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
    </div>
  );
}

const inputStyle = {
  backgroundColor: "#ffc0a7",
  color: "white",
  borderRadius: "8px"
};

export default Cadastro;