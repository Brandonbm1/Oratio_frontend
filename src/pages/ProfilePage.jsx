import LoginRegisterLayout from "../component/LoginRegisterLayout";
import { IoMdPerson } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { SiGithub, SiGoogle } from "react-icons/si";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <LoginRegisterLayout>
      <div className="logins">
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
        <div className="separator" />
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
        </section>
      </div>
    </LoginRegisterLayout>
  );
};

export default Profile;
