import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 shadow-sm">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/">
          ModaStore
        </Link>

        <form className="d-flex mx-auto w-50">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar produtos..."
          />
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