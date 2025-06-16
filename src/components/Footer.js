import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }
  return (
    // <motion.footer
    //   className="footer"
    //   initial={{ opacity: 0, y: 30 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.8 }}
    // >
    //   <div className="footer-content">
    //     <div className="footer-logo">
    //       RTV Solutions
    //     </div>
    //     <p>Empowering businesses with cutting-edge solutions in Cloud, Software, Web & App Development, and Cybersecurity.</p>

    //     <div className="social-icons">
    //       <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
    //       <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //       <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    //       <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </div>

    //     <p className="footer-text">© 2025 RTV Solutions. All Rights Reserved.</p>
    //   </div>
    // </motion.footer>
    <motion.footer
        className="footer"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="footer_content">
          <div className="footer_logo">RTV Solutions</div>
          <p className="footer_copyright">
            © 2024 RTV Solutions. All rights reserved. Transforming businesses through innovation.
          </p>
          <div className="footer_social">
            <a href="#" className="social-icon">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </motion.footer>
  );
};

export default Footer;
