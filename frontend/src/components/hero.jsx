function Hero() {
  return (
    <section
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        height: "60vh",
        backgroundImage:
          "url('https://nox.com.br/wp-content/uploads/2022/11/loja-de-roupas-1-_1_.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "40px",
          borderRadius: "15px"
        }}
      >
        <h1 className="fw-bold">Moda que Combina com Você!</h1>
        <button className="btn btn-light mt-3">
          Confira
        </button>
      </div>
    </section>
  );
}

export default Hero;