import { Link } from "react-router-dom";
import Logo from "../components/logo";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 shadow-sm">
      <div className="container-fluid">

         <Logo />


        <form className="d-flex mx-auto w-50 p-2 rounded-0 align-items-center" style={{ backgroundColor: '#bb7753' }}>
          <input
            className="form-control border-0 text-white rounded-0 flex-grow-1"
            type="search"
            placeholder="Buscar produtos..."
            style={{
              color: 'white',
              backgroundColor: '#bb7753',
            }}
          /> 
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