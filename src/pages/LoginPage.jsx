import React from "react";
import { Link } from "react-router-dom";
import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { IoMdPerson } from "react-icons/io";

const Login = () => {
  return (
    <LoginRegisterLayout>
      <div className="login">
        <IoMdPerson className="login_picture" />
        <form className="login_form">
          <input
            type="text"
            placeholder="Usuario"
            className="input login_form-user"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input login_form-password"
          />
          <div className="separator" />
          <input
            type="button"
            value="Iniciar Sesión"
            className="button login_form-button"
          />
          <Link to="#" className="legend login_form-legend">
            <span>¿Olvidó su contraseña?</span>
          </Link>
          <span className="legend separator_legend">o</span>
          <Link to="/register" className="legend login_form-legend">
            <span>Registrarse</span>
          </Link>
        </form>
      </div>
    </LoginRegisterLayout>
  );
};

export default Login;
