import { useState } from "react";
import { Link } from "react-router-dom";

const listCategories = [
  { title: "Colores", category: ["Rojo", "Azul", "Negro", "Blanco", "Negro"] },
  { title: "Objetos", category: ["Libro", "Cuchillo", "Sombrilla", "Plato"] },
  { title: "Numeros", category: ["Uno", "Dos", "Diez", "Mil"] },
  { title: "Pronombres", category: ["Yo", "Tu", "El", "Nosotros", "Ustedes"] },
];

const Home = () => {
  const [categories, setCategories] = useState(listCategories);
  return (
    <div className="container">
      <main className="categories">
        <h2 className="categories_title">Cagetorias</h2>
        <section className="categories_grid">
          {categories &&
            categories.map((item, index) => {
              return (
                <Link to="#" className="categories_grid-item" key={index}>
                  <span className="categories_grid-item-title">
                    {item.title}
                  </span>
                </Link>
              );
            })}
        </section>
      </main>
    </div>
  );
};

export default Home;
