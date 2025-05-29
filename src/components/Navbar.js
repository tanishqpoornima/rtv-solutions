import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/images/RTV SOLUTIONS.png"; // Ensure correct logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO + TEXT */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="RTV Solutions Logo" className="logo-img" />
          <span className="logo-text">RTV SOLUTIONS</span>
        </Link>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* NAVIGATION LINKS */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
