import { useEffect, useRef, useState } from "react";
import { useModule } from "../hooks/useModule";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import ModuleForm from "./ModuleForm";

const Module = ({ module, password }) => {
  const token = localStorage.getItem("token");
  const { getAll, create, deleteEl } = useModule(token);
  const [toRender, setToRender] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const moduloCrear = useRef(null);
  useEffect(() => {
    obtenerTodo();
    setIsOpen(false);
  }, [module]);

  useEffect(() => {
    moduloCrear.current.classList.toggle("open");
  }, [isOpen]);
  const obtenerTodo = async () => {
    const response = await getAll(module.id);

    setToRender(response);
  };
  const eliminarElemento = async (id) => {
    await deleteEl(module.id, id);
    setToRender((prevState) => prevState.filter((elemt) => elemt.id !== id));
  };
  return (
    <div className="module">
      <section className="module_header">
        <p className="module_header-title">{module.type}</p>
        <button
          className="module_header-add"
          onClick={() => setIsOpen(!isOpen)}
        >
          +
        </button>
      </section>
      <section className="module_create" ref={moduloCrear}>
        <ModuleForm
          actions={module.actions}
          url={module.id}
          password={password}
          setIsOpen={setIsOpen}
          create={create}
        />
      </section>
      <section className="module_body">
        <ul className="module_body-list">
          {toRender &&
            toRender.map((obj, index) => (
              <li className="module_body-list-item" key={index}>
                <Link
                  to={`/adminModule/${module.id}/${obj.id}`}
                  className="module_body-list-item-text"
                >
                  {obj.nombre}
                </Link>
                <button
                  className="module_body-list-item-button"
                  onClick={() => eliminarElemento(obj.id)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Module;
