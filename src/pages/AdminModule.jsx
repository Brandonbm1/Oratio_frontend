import { useEffect, useRef, useState } from "react";
import { useUser } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import Module from "../component/Module";

const AdminModule = () => {
  const { isAuth, adminValidator } = useUser();
  const [module, setModule] = useState(null);
  const password = useRef();
  const navigate = useNavigate();
  const allModules = [
    {
      type: "usuarios",
      id: "users",
      actions: [
        {
          label: "nombre",
          value: "name",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
        {
          label: "apellido",
          value: "lastname",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
        {
          label: "usuario",
          value: "username",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 6,
              message: "El campo debe tener más de 6 caracteres",
            },
          },
        },
        {
          label: "email",
          value: "email",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email invalido",
            },
          },
        },
        {
          label: "telefono",
          value: "phone",
          option: {
            valueAsNumber: {
              value: true,
              message: "Campo numerico",
            },
          },
        },
        {
          label: "fecha de nacimiento",
          value: "fechaNacimiento",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
        {
          label: "contraseña",
          value: "password",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 6,
              message: "El campo debe tener más de 6 caracteres",
            },
          },
        },
        {
          label: "confirmar contraseña",
          value: "confirmPassword",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
            validate: (value) =>
              value === password.current || "Las contraseñas deben coincidir",
          },
        },
        {
          label: "Rol",
          value: "role",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
      ],
    },
    {
      type: "categorias",
      id: "categories",
      actions: [
        {
          label: "nombre",
          value: "name",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
      ],
    },
    {
      type: "palabras",
      id: "words",
      actions: [
        {
          label: "Nombre",
          value: "name",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
        {
          label: "Nombre de categoria",
          value: "nameCategory",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
        {
          label: "Gif",
          value: "gif",
          option: {
            required: {
              value: true,
              message: "Campo requerido",
            },
          },
        },
      ],
    },
    {
      type: "gifs",
      id: "gif",
      actions: [],
    },
  ];

  const validate = async (token) => {
    if (token) {
      const res = await adminValidator(token);
      return res;
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const valid = validate(token);
    if (!token || !isAuth || !valid) navigate("/");
  });

  return (
    <div className="container">
      <main className="adminModule">
        <section className="adminModule_header">
          <h2 className="adminModule_header-title">Modulo de administrador</h2>
        </section>
        <div className="separator" />
        <section className="adminModule_body">
          {allModules &&
            allModules.map((module, index) => {
              return (
                <article
                  key={index}
                  className="adminModule_body-item"
                  onClick={() => setModule(module)}
                >
                  {module.type}
                </article>
              );
            })}
        </section>
        <div className="separator"></div>
        {module && <Module module={module} password={password} />}
      </main>
    </div>
  );
};

export default AdminModule;
