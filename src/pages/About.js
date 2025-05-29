import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate



const About = () => {
  const achievementsRef = useRef(null);
  const isInView = useInView(achievementsRef);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [services, setServices] = useState(0);
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    if (isInView) {
      let clientCount = 0;
      let projectCount = 0;
      let serviceCount = 0;
      const interval = setInterval(() => {
        if (clientCount < 50) {
          setClients(clientCount += 2);
        }
        if (projectCount < 100) {
          setProjects(projectCount += 4);
        }
        if (serviceCount < 10) {
          setServices(serviceCount += 1);
        }
        if (clientCount >= 50 && projectCount >= 100 && serviceCount >= 10) {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className="about">
      {/* Hero Section */}
      <motion.section className="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="hero-overlay">
          <h1>Our Aim</h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            We aim to provide the highest level of service possible in everything that we deliver.
            We invest time and effort into making absolutely sure that we understand a client’s business and its needs so as to tailor our approach and the advice that we give to achieve optimum results.
          </motion.p>
          <motion.button 
            className="hero-button" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              navigate("/contact"); // Navigate to About page
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
            }}
          >
            Succeed With Us →
          </motion.button>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.div 
        className="achievements" 
        ref={achievementsRef} 
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <div className="achievement">
          <h2>{clients}+</h2>
          <p>Clients</p>
        </div>
        <div className="achievement">
          <h2>{projects}+</h2>
          <p>Projects</p>
        </div>
        <div className="achievement">
          <h2>{services}+</h2>
          <p>Services</p>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="about-image">
          <motion.img src={require("../assets/images/pc.jpg")} alt="About Us" whileHover={{ scale: 1.05 }} />
        </div>
        <div className="about-content">
          <h2>Who We Are</h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            At RTV Solutions, we are a passionate team of innovators, problem-solvers, and technologists dedicated to helping businesses thrive in the digital era.
            Founded over 5 years ago, our journey began with a vision to provide tailored and impactful solutions across Cloud Technologies, Software Development, Cybersecurity, and more.
            What sets us apart is our commitment to excellence and a client-centric approach.
            We pride ourselves on building strong relationships with our clients, delivering solutions that not only meet but exceed expectations.
            Our team's expertise and creativity allow us to tackle complex challenges and turn ideas into reality.
            Whether you're a growing startup or an established enterprise, RTV Solutions is here to empower your success.
            Together, let's write a story of innovation, collaboration, and transformation.
          </motion.p>
        </div>
      </motion.div>

      {/* Working Methodology Section */}
      <motion.div className="working-methodology"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2>Our Working Methodology</h2>
        <div className="methodology-grid">
          {[
            { img: require("../assets/images/icon1.png"), text: "Understanding the business of the client" },
            { img: require("../assets/images/icon2.png"), text: "Analyzing the need and preparing a work plan" },
            { img: require("../assets/images/icon3.png"), text: "Offer practical implementation" },
            { img: require("../assets/images/icon4.png"), text: "Assigning an expert as a point of contact" }
          ].map((method, index) => (
            <motion.div key={index} className="method" whileHover={{ scale: 1.1 }}>
              <img src={method.img} alt="Method" />
              <p>{method.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div className="about-values"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2>Our Values</h2>
        <div className="values-grid">
          {[
            { title: "Innovation", desc: "We continuously explore new technologies to offer cutting-edge solutions." },
            { title: "Integrity", desc: "We build trust through transparency, ethics, and responsibility." },
            { title: "Client-Centric", desc: "Our success is measured by our clients' growth and satisfaction." }
          ].map((value, index) => (
            <motion.div key={index} className="value" whileHover={{ scale: 1.05 }}>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
