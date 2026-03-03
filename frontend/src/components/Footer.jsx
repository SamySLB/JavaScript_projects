import Logo from "../components/logo";
function Footer() {
  return (
    <footer
      className="text-white py-5 mt-5"
      style={{ backgroundColor: "#bb7753" }} 
    >
      <div className="container d-flex justify-content-between align-items-center">

       
        <div className="text-start">
          <p className="mb-1">Endereço: Rua Tavarez, 123</p>
          <p className="mb-1">Telefone: (11) 99999-9999</p>
          <p className="mb-0">Email: contato@modastore.com</p>
        </div>

      
        <div>
           <Logo />

        </div>

      </div>
    </footer>
  );
}

export default Footer;