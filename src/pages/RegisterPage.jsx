import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <LoginRegisterLayout>
      <div className="login">
        <FaClipboardList className="login_picture" />
        <form className="login_form">
          <input
            type="text"
            className="input login_form-name"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="input login_form-lastname"
            placeholder="Apellido"
          />
          <input
            type="text"
            className="input login_form-user"
            placeholder="Usuario"
          />
          <input
            type="email"
            className="input login_form-email"
            placeholder="Correo electronico"
          />
          <input
            type="text"
            className="input login_form-telefono"
            placeholder="Telefono"
          />
          <input
            type="password"
            className="input register_form-password"
            placeholder="Contraseña"
          />
          <input
            type="password"
            className="input register_form-confirmPassword"
            placeholder="Confirmar contraseña"
          />
          <div className="separator" />
          <input
            type="button"
            className="button register_form-button"
            value="Crear cuenta"
          />
        </form>
        <span
          className="legend separator_legend"
          style={{ marginTop: ".5rem" }}
        >
          ¿Ya estas registrado?
          <Link to="/login" className="legend login_form-legend">
            {" "}
            Inicia Sesión
          </Link>
        </span>
      </div>
    </LoginRegisterLayout>
  );
};

export default Register;
