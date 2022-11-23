import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useModule } from "../hooks/useModule";
import { subirVideo } from "../firebase.config";

const ModuleForm = ({ actions, url, password, setIsOpen, create }) => {
  const token = localStorage.getItem("token");
  const { register, handleSubmit, reset, watch } = useForm();
  password.current = watch("password", "");
  const [categoriesForOptions, setCategoriesForOptions] = useState([]);
  const { getAll, createWord, createGif } = useModule(token);
  const [file, setFile] = useState(null);

  const obtenerCategorias = async () => {
    const response = await getAll("categories");
    setCategoriesForOptions(response);
  };

  useEffect(() => {
    if (url === "words") obtenerCategorias();
  }, [url]);

  const upload = async (data) => {
    const newUrl = await subirVideo(file);
    await createWord(data, url);
    console.log(newUrl);
    createGif(data.name, newUrl);
  };

  const onSubmit = async (data) => {
    if (url !== "words") {
      try {
        const { password, confirmPassword, phone } = data;
        if (!phone) data.phone = null;
        if (confirmPassword === password) {
          const response = await create(data, url);
          if (response.token) {
            setIsOpen(false);
            reset();
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      try {
        setFile(data.gif[0]);
        await upload(data);
      } catch (error) {
        console.error(error.message);
      }
    }
  };
  return (
    <form className="module_create-form" onSubmit={handleSubmit(onSubmit)}>
      {actions &&
        actions.map((action, index) => {
          return (
            <section className="module_create-form-section" key={index}>
              {url !== "words" ? (
                <>
                  <label
                    className="module_create-form-section-label"
                    htmlFor={`${action.value}`}
                  >
                    {action.label}
                  </label>
                  {action.value !== "role" ? (
                    <input
                      type={
                        action.value === "fechaNacimiento"
                          ? "date"
                          : action.value === "password"
                          ? "password"
                          : action.value === "confirmPassword"
                          ? "password"
                          : "text"
                      }
                      id={`${action.value}`}
                      className="module_create-form-section-input"
                      {...register(action.value, action.option)}
                    />
                  ) : (
                    <select
                      className="module_create-form-section-input"
                      id="select"
                      {...register(action.value, action.option)}
                    >
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </select>
                  )}
                </>
              ) : (
                <>
                  <label
                    className="module_create-form-section-label"
                    htmlFor={`${action.value}`}
                  >
                    {action.label}
                  </label>
                  {action.value === "nameCategory" ? (
                    <select
                      className="module_create-form-section-input"
                      {...register(action.value, action.option)}
                      id="nameCategory"
                    >
                      {categoriesForOptions &&
                        categoriesForOptions.map((category, index) => {
                          return (
                            <option value={category.nombre} key={index}>
                              {category.nombre}
                            </option>
                          );
                        })}
                    </select>
                  ) : (
                    <input
                      type={action.value === "gif" ? "file" : "text"}
                      className="module_create-form-section-input"
                      {...register(action.value, action.option)}
                      id={action.value}
                    />
                  )}
                </>
              )}
            </section>
          );
        })}
      <button className="module_create-form-section-button">Agregar</button>
    </form>
  );
};

export default ModuleForm;
