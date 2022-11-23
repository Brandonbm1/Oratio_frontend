import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { SiGithub, SiGoogle } from "react-icons/si";

import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { useUser } from "../context/userContext";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAuth, LogIn } = useUser();
  const [errorLogin, setErrorLogin] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/api/search");
  });
  useEffect(() => {
    setTimeout(() => {
      setErrorLogin(null);
    }, 15000);
  }, [errorLogin]);

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;
      if (username && password) {
        const response = await LogIn(data);
        if (response.token) {
          setErrorLogin(null);
          navigate("/api/search");
        } else {
          setErrorLogin(response.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <LoginRegisterLayout>
      <div className="login">
        <IoMdPerson className="login_picture" />
        <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login_form-section">
            <label className="login_form-label" htmlFor="username">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Usuario"
              className="input login_form-user"
              id="username"
              {...register("username", {
                required: "Campo requerido",
              })}
            />
            {errors.username && (
              <span className="login_form-alert">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="login_form-section">
            <label htmlFor="password" className="login_form-label">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              className="input login_form-password"
              {...register("password", {
                required: "Campo requerida",
                minLength: {
                  value: 6,
                  message: "El campo debe tener más de 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="login_form-alert">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="separator" />
          <input
            type="submit"
            value="Iniciar Sesión"
            className="button login_form-button"
          />
          {errorLogin && <span className="form_error">{errorLogin}</span>}
          <Link to="#" className="legend login_form-legend">
            <span>¿Olvidó su contraseña?</span>
          </Link>
          <span className="legend separator_legend">o</span>
          <Link to="/auth/register" className="legend login_form-legend">
            <span>Registrarse</span>
          </Link>
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

export default LoginPage;
