import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { FaClipboardList } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUser } from "../context/userContext";
import { useRef, useState, useEffect } from "react";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const password = useRef({});
  password.current = watch("password", "");
  const { Register } = useUser();

  const [errorRegister, setErrorRegister] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setErrorRegister(null);
    }, 15000);
  }, [errorRegister]);

  const onSubmit = async (data) => {
    try {
      const { password, confirmPassword, phone } = data;
      if (!phone) data.phone = null;
      if (confirmPassword === password) {
        const response = await Register(data);
        if (response.token) {
          return navigate("/auth/login");
        } else {
          setErrorRegister(response.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <LoginRegisterLayout>
      <div className="login">
        <FaClipboardList className="login_picture" />
        <form className="login_form register" onSubmit={handleSubmit(onSubmit)}>
          <div className="login_form-section">
            <label htmlFor="name" className="login_form-label">
              Nombre
            </label>
            <input
              type="text"
              className="input login_form-name"
              placeholder="John"
              {...register("name", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
              id="name"
            />
            {errors.name && (
              <span className="login_form-alert">{errors.name.message}</span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="lastname" className="login_form-label">
              Apellido
            </label>
            <input
              type="text"
              className="input login_form-lastname"
              placeholder="Doe"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
              id="lastname"
            />
            {errors.lastname && (
              <span className="login_form-alert">
                {errors.lastname.message}
              </span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="username" className="login_form-label">
              Usuario
            </label>
            <input
              type="text"
              className="input login_form-user"
              placeholder="Johndoe12"
              {...register("username", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: {
                  value: 6,
                  message: "El campo debe tener más de 6 caracteres",
                },
              })}
              id="username"
            />
            {errors.username && (
              <span className="login_form-alert">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="email" className="login_form-label">
              Email
            </label>
            <input
              type="email"
              className="input login_form-email"
              placeholder="Johndoe@correo.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email invalido",
                },
              })}
              id="email"
            />
            {errors.email && (
              <span className="login_form-alert">{errors.email.message}</span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="phone" className="login_form-label">
              Telefono
            </label>
            <input
              type="text"
              className="input login_form-telefono"
              placeholder="3100000000"
              {...register("phone", {
                valueAsNumber: { value: true, message: "Campo numerico" },
              })}
              id="phone"
            />
            {errors.phone && (
              <span className="login_form-alert">{errors.phone.message}</span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="fechaNacimiento" className="login_form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="input login_form-date"
              {...register("fechaNacimiento", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
              id="fechaNacimiento"
            />
            {errors.fechaNacimiento && (
              <span className="login_form-alert">
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="password" className="login_form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="input register_form-password"
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: {
                  value: 6,
                  message: "El campo debe tener más de 6 caracteres",
                },
              })}
              id="password"
            />
            {errors.password && (
              <span className="login_form-alert">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="confirmPassword" className="login_form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="input register_form-confirmPassword"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                validate: (value) =>
                  value === password.current ||
                  "Las contraseñas deben coincidir",
              })}
              id="confirmPassword"
            />
            {errors.confirmPassword && (
              <span className="login_form-alert">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <input
            type="submit"
            className="button register_form-button"
            value="Crear cuenta"
          />
          {errorRegister && <span className="form_error">{errorRegister}</span>}
          <span
            className="legend separator_legend"
            style={{ margin: ".5rem 0" }}
          >
            ¿Ya estas registrado?
            <Link to="/auth/login" className="legend login_form-legend">
              {" "}
              Inicia Sesión
            </Link>
          </span>
          {/* <div className="separator" />
          <section className="otherLogins">
            <p className="otherLogins_title">Iniciar Sesión con</p>
            <div className="otherLogins_flex">
              <span className="otherLogins_flex-item">
                <SiGoogle />
              </span>
              <span className="otherLogins_flex-item">
                <SiGithub />
              </span>
              <span className="otherLogins_flex-item">
                <MdFacebook />
              </span>
            </div>
          </section> */}
        </form>
      </div>
    </LoginRegisterLayout>
  );
};

export default RegisterPage;
