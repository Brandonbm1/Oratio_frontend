import { ImHome3 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BsBookHalf } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavbarDetails } from "./NavbarDetails";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
const Navbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const details = useRef(null);
  const list = useRef(null);

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
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_container">
          <span className="navbar_item">
            <NavLink to="/home" className="navbar_item-link logo">
              ORATIO
              <p className="navbar_item-sublogo">LSC</p>
            </NavLink>
          </span>
          <ul className="navbar_list" ref={list}>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/home"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ImHome3 className="navbar_item-link-icon" />
              </NavLink>
              <NavLink
                to="/home"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/search"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FiSearch className="navbar_item-link-icon" />
              </NavLink>
              <NavLink
                to="/search"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Buscar
              </NavLink>
            </li>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/course"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <BsBookHalf className="navbar_item-link-icon" />
              </NavLink>
              <NavLink
                to="/course"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Cursos
              </NavLink>
            </li>
            <li className="navbar_item" onClick={handleOpenList}>
              <NavLink
                to="/profile"
                className="navbar_item-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <IoMdPerson className="navbar_item-link-icon" />
              </NavLink>
              <NavLink
                to="/profile"
                className="navbar_item-link-text"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Perfil
              </NavLink>
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
