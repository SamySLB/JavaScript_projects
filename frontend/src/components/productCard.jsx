function ProductCard({ nome, preco, imagem }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">

        <div style={{ height: "300px", overflow: "hidden" }}>
          <img
            src={imagem}
            alt={nome}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>

        <div className="card-body text-center">
          <h6 className="text-truncate">{nome}</h6>
          <p className="fw-bold">
            R$ {preco.toFixed(2)}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;