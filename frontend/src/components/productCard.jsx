function ProductCard({ nome, preco, imagem }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imagem}
          className="card-img-top"
          alt={nome}
        />

        <div className="card-body text-center">
          <h6>{nome}</h6>
          <p className="fw-bold">R$ {preco}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;