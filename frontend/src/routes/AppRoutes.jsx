import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;