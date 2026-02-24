import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";

function CatalogPage() {
  const { categoria } = useParams();

  return (
    <>
      <Navbar />
      <Catalog category={categoria} />
      <Footer />
    </>
  );
}

export default CatalogPage;