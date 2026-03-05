import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";

function CatalogPage() {
  const { categoria } = useParams();
  const cat = categoria || "all";

  return (
    <>
      <Navbar />
      <Catalog category={cat} />
      <Footer />
    </>
  );
}

export default CatalogPage;