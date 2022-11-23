import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="container">
      <main className="notfound">
        <article className="notfound_tag">
          <p className="notfound_tag-number">404</p>
          <span className="notfound_tag-description">
            La pagina no ha sido encontrada
          </span>
        </article>
        <Link to="/" className="notfound_button">
          <span>Volver a la busqueda</span>
          <FiSearch />
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
