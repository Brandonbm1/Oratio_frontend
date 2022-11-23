import { FiSearch, FiSettings } from "react-icons/fi";
import { BsBookHalf } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFolder } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";

import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

import { useUser } from "../context/userContext";

const Navbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const list = useRef(null);

  const { isAuth, LogOut, isAdministrator } = useUser();
  const handleOpenList = (e) => {
    if (isListOpen) {
      list.current.classList.remove("active");
      setIsListOpen(false);
    } else {
      list.current.classList.add("active");
      setIsListOpen(true);
    }
  };

  const activeStyle = {
    color: "#fff",
    animation: "shake 1.5s ease",
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_container">
          <span className="navbar_item">
            <NavLink to="/api/search" className="navbar_item-link logo">
              ORATIO
              <p className="navbar_item-sublogo">LSC</p>
            </NavLink>
          </span>
          <ul className="navbar_list" ref={list}>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/api/search"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FiSearch className="navbar_item-link-icon" title="Buscar" />
              </NavLink>
              <NavLink
                to="/api/search"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Buscar
              </NavLink>
            </li>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/api/category"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FaFolder className="navbar_item-link-icon" title="Categoria" />
              </NavLink>
              <NavLink
                to="/api/category"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Categoria
              </NavLink>
            </li>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/api/course"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <BsBookHalf className="navbar_item-link-icon" title="Cursos" />
              </NavLink>
              <NavLink
                to="/api/course"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cursos
              </NavLink>
            </li>
            {isAuth && isAdministrator && (
              <li className="navbar_item" onClick={handleOpenList}>
                <NavLink
                  to="/api/adminModule"
                  className="navbar_item-link"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <FiSettings
                    className="navbar_item-link-icon"
                    title="Administrador"
                  />
                </NavLink>
                <NavLink
                  to="/api/adminModule"
                  className="navbar_item-link-text"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Administrador
                </NavLink>
              </li>
            )}
            <li className="navbar_item" onClick={handleOpenList}>
              {!isAuth && (
                <>
                  <NavLink
                    to="/auth/login"
                    className="navbar_item-link"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <IoMdPerson
                      className="navbar_item-link-icon"
                      title="Perfil"
                    />
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                    className="navbar_item-link-text"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Perfil
                  </NavLink>
                </>
              )}
              {isAuth && (
                <>
                  <NavLink
                    to="/auth/login"
                    className="navbar_item-link"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    onClick={LogOut}
                  >
                    <SlLogout
                      className="navbar_item-link-icon"
                      title="Perfil"
                    />
                  </NavLink>
                  <NavLink
                    to="/auth/login"
                    className="navbar_item-link-text"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Perfil
                  </NavLink>
                </>
              )}
            </li>
          </ul>
          <section className="navbar_menu">
            <button className="navbar_menu-button" onClick={handleOpenList}>
              <HiOutlineMenuAlt3 />
            </button>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
