import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { IoMdPerson } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <LoginRegisterLayout>
      {/* <div className="logins">
        <section className="naturalLogin">
          <article className="regularLogin">
            <Link to="/login">
              <IoMdPerson className="regularLogin_icon" />
            </Link>
            <Link to="/login" className="regularLogin_link">
              Iniciar Sesión
            </Link>
          </article>
          <article className="regularLogin">
            <Link to="/register">
              <FaClipboardList className="regularLogin_icon" />
            </Link>
            <Link to="/register" className="regularLogin_link">
              Registrarse
            </Link>
          </article>
        </section>
      </div> */}
    </LoginRegisterLayout>
  );
};

export default Profile;
