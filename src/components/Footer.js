import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <div className="footer-logo">
          RTV Solutions
        </div>
        <p>Empowering businesses with cutting-edge solutions in Cloud, Software, Web & App Development, and Cybersecurity.</p>

        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        <p className="footer-text">© 2025 RTV Solutions. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
