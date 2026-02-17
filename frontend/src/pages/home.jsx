import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="container mt-5">
      <h1>🏠 Home</h1>
      <p>Login realizado com sucesso!</p>

      <button 
        className="btn btn-dark mt-3"
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
}

export default Home;