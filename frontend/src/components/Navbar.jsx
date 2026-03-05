import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../components/logo";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // função para normalizar texto (remove acentos e ignora maiúsculas)
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const term = params.get("search") || "";
    setQuery(term);
  }, [location.search]);

  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 shadow-sm">
      <div className="container-fluid">

        <Link to="/home" className="text-decoration-none">
    <Logo />
  </Link>

        <form
          className="d-flex mx-auto w-50 p-2 rounded-0 align-items-center"
          style={{ backgroundColor: "#bb7753" }}
          onSubmit={(e) => {
            e.preventDefault();

            // normaliza o texto da busca
            const normalizedQuery = normalizeText(query.trim());
            const encoded = encodeURIComponent(normalizedQuery);

            let cat = "all";
            const parts = location.pathname.split("/");

            if (parts[1] === "catalogo" && parts[2]) {
              cat = parts[2];
            }

            // envia para o catálogo com a busca
            navigate(`/catalogo/${cat}?search=${encoded}`);
          }}
        >
          <input
            className="form-control border-0 text-white rounded-0 flex-grow-1"
            type="search"
            placeholder="Buscar produtos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              color: "white",
              backgroundColor: "#bb7753",
            }}
          />

          <button
            type="submit"
            className="btn text-white border-0 p-0 ms-2"
            style={{ backgroundColor: "#bb7753" }}
          >
            🔍
          </button>

          <style>{`
            .navbar input::placeholder {
              color: white;
              opacity: 1;
            }
          `}</style>
        </form>

        <div className="d-flex gap-3">
          <Link to="/perfil" className="text-dark text-decoration-none">
            Perfil
          </Link>

          <Link to="/favoritos" className="text-dark text-decoration-none">
            ❤
          </Link>

          <Link to="/carrinho" className="text-dark text-decoration-none">
            🛒
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;