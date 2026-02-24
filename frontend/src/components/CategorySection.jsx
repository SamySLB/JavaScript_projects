import CategoryCard from "./CategoryCards";

function CategorySection() {
  const categories = [
    {
      title: "Roupas Femininas",
      image: "",
      category: "women's clothing",
    },
    {
      title: "Roupas Masculinas",
      image: "",
      category: "men's clothing",
    },
  ];

  return (
    <section className="container-fluid py-5">
      <div className="row">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.category}
            title={cat.title}
            image={cat.image}
            category={cat.category}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;