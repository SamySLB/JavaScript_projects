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

      // Salvar token
      localStorage.setItem("token", response.data.token);

      // Redirecionar
      navigate("/");

    } catch (error) {
      setErro("Email ou senha inválidos");
      console.error(error);
    }
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4 text-center">Login</h2>

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

          <div className="mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;