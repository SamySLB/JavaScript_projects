import { useNavigate } from "react-router-dom";

function CategoryCard({ title, image, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalogo/${category}`);
  };

  return (
    <div
      className="col-md-6 position-relative overflow-hidden"
      style={{ cursor: "pointer", height: "400px" }}
      onClick={handleClick}
    >
      <img
        src={image}
        className="w-100 h-100 object-fit-cover"
      />

      <div
        className="position-absolute top-50 start-50 translate-middle text-white text-center"
        style={{
          background: "rgba(0,0,0,0.4)",
          padding: "20px 40px",
          borderRadius: "8px",
        }}
      >
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CategoryCard;