import api from "../api/api";

export async function addProductToList(tipo, produto) {
  return api.post("/user-list", {
    tipo,
    produto
  });
}