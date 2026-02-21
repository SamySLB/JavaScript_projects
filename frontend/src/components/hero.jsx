function Hero({ onConfiraClick }) {
  return (
    <section
      className="vh-100 d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://nox.com.br/wp-content/uploads/2022/11/loja-de-roupas-1-_1_.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      role="banner"
    >
      <div
        className="p-5 rounded"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <h1 className="fw-bold display-4">
          Moda que Combina com Você!
        </h1>

        <button
          onClick={onConfiraClick}
          className="btn btn-light btn-lg mt-4"
          aria-label=" leva para seção de produtos"
        >
          Confira
        </button>
      </div>
    </section>
  );
}

export default Hero;