function ProductCard({ nome, preco, imagem, descricao }) {
  return (
    <div
      className="shadow-sm d-flex flex-column"
      style={{
        borderRadius: "5px",
        overflow: "hidden",
        backgroundColor: "white",
        height: "100%"
      }}
    >
      {/* img */}
      <div
        style={{
          aspectRatio: "1 / 1", 
          overflow: "hidden",
          backgroundColor: "#fff"
        }}
      >
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

      {/* CONTEÚDO */}
      <div className="p-3 d-flex flex-column">

        <h6
          className="fw-semibold mb-1"
          style={{ color: "#9a6949" }}
        >
          {nome}
        </h6>

        <p
          className="mb-3"
          style={{
            fontSize: "0.85rem",
             color: "#bb7753",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "40px"
          }}
        >
          {descricao}
        </p>

        <div className="mt-auto text-end">
          <span
            className="fw-bold"
            style={{
              color: "#bb7753",
              fontSize: "1rem"
            }}
          >
            R$ {Number(preco).toFixed(2)}
          </span>
        </div>

      </div>
    </div>
  );
}
export default ProductCard;