import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { useRef } from "react";
const list = [
  "asdasdasdasd",
  "asdasdasdasd",
  "asdasdasdasd",
  "asdasdasdasd",
  "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
  // "asdasdasdasd",
];
const list2 = [
  {
    name: "zapatos",
    link: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Seven_segment_display-animated.gif",
  },
  {
    name: "zapatos",
    link: "https://i.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
  },
  {
    name: "zapatos",
    link: "https://i.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
  },
];
const CategorySearch = () => {
  const { categoria, palabra } = useParams();
  const [busqueda, setBusqueda] = useState(palabra);
  const [listCategorie, setListCategorie] = useState(list);
  const [searchResults, setSearchResults] = useState(list2);

  const element = useRef(null);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  const openSearch = (e) => {
    const el = document.querySelector(".open");
    if (el) el.classList.remove("open");
    e.target.classList.add("open");
    element.current.scrollLeft += element.current.offsetWidth;
  };
  const moveSearch = () => {
    element.current.scrollLeft -= element.current.offsetWidth;
  };
  return (
    <div className="container">
      <main className="categorieSearch">
        <section className="categorieSearch_header">
          <Link to="/api/category" className="categorieSearch_header-back">
            <MdArrowForwardIos className="categorieSearch_header-back-button" />
          </Link>
          <div className="">
            <p className="categorieSearch_header-title">
              Categoria: <b>{categoria}</b>
            </p>
            <form className="categorieSearch_header-form">
              <input
                className="categorieSearch_header-form-text"
                type="text"
                value={busqueda}
                onChange={handleChange}
                placeholder="Busqueda"
              />
              <input
                className="categorieSearch_header-form-button"
                type="button"
                value="Buscar"
              />
            </form>
          </div>
        </section>
        <div className="separator"></div>

        <section className="categorieSearch_body" ref={element}>
          <ul className="categorieSearch_body-list">
            {listCategorie &&
              listCategorie.map((word, index) => (
                <li
                  className="categorieSearch_body-list-item"
                  key={index}
                  onClick={openSearch}
                >
                  {word}
                </li>
              ))}
          </ul>

          <aside className="categorieSearch_body-result">
            <button
              className="categorieSearch_body-button"
              onClick={moveSearch}
            >
              <MdArrowForwardIos />
            </button>
            {searchResults &&
              searchResults.map((result, index) => {
                return (
                  <div className="categorieSearch_body-result-item" key={index}>
                    <img
                      className="categorieSearch_body-result-item-img"
                      src={result.link}
                      alt={result.name}
                    ></img>
                  </div>
                );
              })}
          </aside>
        </section>
      </main>
    </div>
  );
};

export default CategorySearch;
