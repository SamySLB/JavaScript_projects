import { useEffect } from "react";
import api from "./api/api";

function App() {

  useEffect(() => {
    api.get("/pedidos/meus")
      .then(res => {
        console.log("Resposta do backend:", res.data);
      })
      .catch(err => {
        console.error("Erro:", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Integração Backend OK?</h1>
    </div>
  );
}

export default App;