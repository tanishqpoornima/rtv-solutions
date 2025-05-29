import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Get In Touch</h1>
      <p>Have a question or need a consultation? We’d love to hear from you.</p>

      <motion.form 
        className="contact-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="input-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
