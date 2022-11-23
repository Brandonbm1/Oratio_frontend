import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const listCategories = [
  { title: "Colores", category: ["Rojo", "Azul", "Negro", "Blanco", "Negro"] },
  { title: "Objetos", category: ["Libro", "Cuchillo", "Sombrilla", "Plato"] },
  { title: "Numeros", category: ["Uno", "Dos", "Diez", "Mil"] },
  { title: "Pronombres", category: ["Yo", "Tu", "El", "Nosotros", "Ustedes"] },
];

const Home = () => {
  const [categories, setCategories] = useState(listCategories);
  const [word, setWord] = useState("");
  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const filterCategories = () => {
    // setCategories(
    //   categories.filter((category) => {
    //     return category.category.includes(word);
    //   })
    // );
  };
  useEffect(() => {
    filterCategories();
  }, [word]);

  return (
    <div className="container">
      <main className="categories">
        <section className="categories_header">
          <h2 className="categories_header-title">Cagetorias</h2>
          <input
            type="text"
            placeholder="Busqueda"
            id="filter"
            className="categories_header-filter"
            value={word}
            onChange={handleChange}
          />
        </section>
        <div className="separator"></div>
        <section className="categories_body">
          <ul className="categories_body-list">
            {categories &&
              categories.map((category, index) => {
                return (
                  <li className="categories_body-list-item" key={index}>
                    <Link
                      to={`/api/category/${category.title}/${category.category[0]}`}
                      className="categories_body-list-title"
                    >
                      {category.title}
                    </Link>
                    <ul className="categories_body-sublist">
                      {category.category.map((cat, index) => {
                        return (
                          <li
                            className="categories_body-sublist-item"
                            key={index}
                          >
                            <Link
                              to={`/api/category/${category.title}/${cat}`}
                              className="categories_body-sublist-title"
                            >
                              {cat}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;

/*
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
  </section>
})} */
