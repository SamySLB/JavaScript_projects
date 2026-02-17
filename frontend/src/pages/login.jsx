import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/usuarios/login", {
        email,
        senha
      });

      localStorage.setItem("token", response.data.token);
      navigate("/");

    } catch (error) {
      setErro("Email ou senha inválidos");
      console.error(error);
    }
  }
return (
  <div className="container-fluid vh-100 p-0">
    <div className="row h-100 g-0">

      {/* LOGIN - ESQUERDA */}
      <div className="col-lg-5 d-flex justify-content-center align-items-center"
           style={{ backgroundColor: "#f8f5f2" }}>

        <div style={{
          width: "100%",
          maxWidth: "380px",
          padding: "40px"
        }}>

          <h2 className="fw-bold mb-3" style={{ color: "#1c1c1c" }}>
            Sua visão da Moda!
          </h2>

          <p style={{ color: "#b89b72" }}>
            Entre e descubra tendências
          </p>

          {erro && <div className="alert alert-danger">{erro}</div>}

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button
              className="btn w-100"
              style={{
                backgroundColor: "#1c1c1c",
                color: "white",
                borderRadius: "10px"
              }}
            >
              Entrar
            </button>

          </form>
        </div>
      </div>

      {/* IMAGEM - DIREITA */}
      <div
        className="col-lg-7 d-none d-lg-block"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1520975916090-3105956dac38')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

    </div>
  </div>
);
}

export default Login;