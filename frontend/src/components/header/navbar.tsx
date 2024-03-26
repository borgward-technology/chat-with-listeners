import  { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./navbar.css";
import SelectCountryComponent from "./dropdown_for_navbar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1050) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" style={({textDecoration:"none"})}>
          Chat With Listener
        </NavLink>

        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list" style={({listStyle:"none"})}>
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}  style={({textDecoration:"none"})}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
                style={({textDecoration:"none"})}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
                style={({textDecoration:"none"})}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/howitworks"
                className="nav__link"
                onClick={closeMenuOnMobile}
                style={({textDecoration:"none"})}
              >
                How It Works
              </NavLink>
              
              
            </li>
            <li className="nav__item">
                <SelectCountryComponent></SelectCountryComponent>
              </li>
            {/* <li className="nav__item">
              <NavLink
                to="/location"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Location
              </NavLink>
            </li> */}

            <li className="nav__item">  
              
              <NavLink to="/chatnow" className="nav__cta"
                style={({textDecoration:"none"})}>
                Chat Now
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;