import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;