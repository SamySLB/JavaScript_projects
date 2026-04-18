import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";
import CatalogPage from "../pages/CatalogPage";
import Carrinho from "../pages/Carrinho";
import Favoritos from "../pages/Favoritos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />

         <Route path="/catalogo/:categoria?" element={<CatalogPage />} />
         <Route path="/carrinho" element={<Carrinho />} />
         <Route path="/favoritos" element={<Favoritos />} />
         
         
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;