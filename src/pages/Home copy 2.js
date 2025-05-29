// import React from "react";
import "./Home.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation function
  const [visibleDesc, setVisibleDesc] = useState(null);
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero_home"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        >
        <div className="hero_home-overlay">
          <motion.h1
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to RTV Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Delivering cutting-edge solutions in Cloud, Software, Web, App
            Development, Cybersecurity, and Tool Integration. With 5+ years of
            expertise, we help transform ideas into reality with precision and
            innovation.
          </motion.p>
          <motion.button
            className="hero_home-button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              navigate("/services"); // Navigate to About page
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
            }}
          >
            Get Started →
          </motion.button>
        </div>
      </motion.section>

      {/* Circular Services Section */}
      <div className="services_home-wrapper">
      <h2>Our Services</h2>
      <p className="subtitle">Hover over icons to explore</p>
      <div className="circle-diagram">
        <svg className="ring" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" strokeWidth="48" strokeDasharray="330 629" strokeDashoffset="0" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="#e74c3c" strokeWidth="40" strokeDasharray="330 630" strokeDashoffset="0" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" stroke-width="48" stroke-dasharray="3 629" stroke-dashoffset="0" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" strokeWidth="48" strokeDasharray="330 629" strokeDashoffset="-300" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="#8e44ad" strokeWidth="40" strokeDasharray="330 630" strokeDashoffset="-300" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" stroke-width="44" stroke-dasharray="3 629" stroke-dashoffset="-300" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" strokeWidth="48" strokeDasharray="330 629" strokeDashoffset="-600" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="#f39c12" strokeWidth="40" strokeDasharray="330 630" strokeDashoffset="-600" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" stroke-width="44" stroke-dasharray="3 629" stroke-dashoffset="-600" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" strokeWidth="48" strokeDasharray="330 898" strokeDashoffset="-900" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="#2980b9" strokeWidth="40" strokeDasharray="330 900" strokeDashoffset="-900" />
          <circle cx="300" cy="300" r="190" fill="none" stroke="white" stroke-width="44" stroke-dasharray="3 929" stroke-dashoffset="-900" />
        </svg>

        <div className="circle-center">💡</div>

        <div className="circle-item item-1"><span>📊</span></div>
        <div className="info-bubble info-1">
          <strong>Analytics</strong><br/>
          Track key performance metrics and visualize your data for better decisions.
        </div>

        <div className="circle-item item-2"><span>🤲</span></div>
        <div className="info-bubble info-2">
          <strong>Customer Service</strong><br/>
          Support your customers with a personalized and responsive experience.
        </div>

        <div className="circle-item item-3"><span>🎯</span></div>
        <div className="info-bubble info-3">
          <strong>Goal Setting</strong><br/>
          Set and manage targets that align with your business objectives.
        </div>

        <div className="circle-item item-4"><span>🏢</span></div>
        <div className="info-bubble info-4">
          <strong>Company Insights</strong><br/>
          Understand your internal operations with in-depth organizational data.
        </div>
      </div>
    </div>



      {/* About Us Section with 3D Scroll Effect */}
      <motion.div
        className="about_home-preview"
        initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>Who We Are</h2>
        <p>
            At RTV Solutions, we bring over 5 years of expertise, delivering innovative and impactful digital solutions. Our journey began with a mission to empower businesses through cutting-edge technologies, and today, we're proud to serve clients across various industries.
        </p>
        <p>
            We specialize in Cloud Solutions, Software Development, Web and App Development, Cybersecurity, and Tools Integration. With a commitment to excellence and a client-focused approach, we ensure every project is tailored to meet unique business needs.
        </p>
        <p>
            Let's work together to turn your ideas into reality.
        </p>
        
        <motion.button
          className="about_home-button"
          whileHover={{ scale: 1.2, rotateX: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            navigate("/about"); // Navigate to About page
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
          }}
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* Testimonials Section with 3D Scroll Effect */}
      <motion.div
        className="testimonials_home"
        initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>What Our Clients Say</h2>
        <div className="testimonial_home-grid">
          {[
            {
              name: "John Doe",
              feedback:
                "RTV Solutions transformed our business with their innovative cloud solutions!",
            },
            {
              name: "Jane Smith",
              feedback:
                "A highly professional team that delivers exceptional software solutions.",
            },
            {
              name: "Mark Johnson",
              feedback:
                "Their cybersecurity expertise gave us peace of mind and protection!",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial_home"
              whileHover={{ scale: 1.1, rotateX: 10 }}
              transition={{ duration: 0.3 }}
            >
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section with 3D Scroll Effect */}
      <motion.div
        className="contact_home-preview"
        initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>Get in Touch</h2>
        <p>Let's discuss how we can work together to achieve your business goals.</p>
        <motion.button
          className="contact_home-preview-button"
          whileHover={{ scale: 1.2, rotateX: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            navigate("/contact"); // Navigate to About page
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
          }}
        >
          Contact Us →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
