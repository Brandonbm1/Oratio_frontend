import { ImHome3 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BsBookHalf } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { NavbarDetails } from "./NavbarDetails";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const handleOpenDetails = () => {
    const details = document.getElementById("details");
    if (isDetailsOpen) details.classList.toggle("active");
  };

  const activeStyle = {
    color: "#64a771",
  };
  return (
    <nav className="navbar">
      <div className="container">
        <NavbarDetails id="details" />
        <ul className="navbar_list">
          <li className="navbar_item">
            <NavLink
              to="/home"
              className="navbar_item-link logo"
              onClick={handleOpenDetails}
            >
              ORATIO
            </NavLink>
            <p className="navbar_item-sublogo">LSC</p>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/home"
              className="navbar_item-link"
              onClick={handleOpenDetails}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ImHome3 className="navbar_item-icon" />
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/search"
              className="navbar_item-link"
              onClick={handleOpenDetails}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <FiSearch className="navbar_item-icon" />
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/course"
              className="navbar_item-link"
              onClick={handleOpenDetails}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <BsBookHalf className="navbar_item-icon" />
            </NavLink>
          </li>
          <li className="navbar_item">
            <NavLink
              to="/profile"
              className="navbar_item-link"
              onClick={handleOpenDetails}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IoMdPerson className="navbar_item-icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
