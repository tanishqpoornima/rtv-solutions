import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="logo">
        <Link to="/" onClick={scrollToTop}>
          RTV Solutions
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>Home</Link>
          </li>
          <li>
            <Link to="/services" onClick={scrollToTop}>Services</Link>
          </li>
          <li>
            <Link 
              to="/about"
              onClick={() => {
                if (location.pathname === "/about") {
                  scrollToTop();
                }
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
