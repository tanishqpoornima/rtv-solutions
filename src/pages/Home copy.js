import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation function
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

      {/* Our Services Section */}
      <motion.div
        className="services_home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>OUR SERVICES</h2>
        <div className="service_home-grid">
          {[
            {
              title: "Cloud & Security Solutions",
              desc: "We provide scalable and secure cloud solutions that help businesses transition smoothly to cloud environments. Our security strategies ensure data protection, regulatory compliance, and real-time threat detection, safeguarding your operations from cyber risks."
            },
            {
              title: "Networking & Load Balancing",
              desc: "Improve connectivity and performance with secure and efficient networking solutions. We design optimized network architectures, implement access control measures, and enhance load balancing to ensure seamless data flow and system reliability."
            },
            {
              title: "Software Development",
              desc: "From enterprise applications to custom software, we develop high-quality solutions tailored to your business needs. Our expertise ensures scalable, efficient, and user-friendly software that enhances productivity and meets evolving business demands."
            },
            {
              title: "Cybersecurity",
              desc: "Protect your digital assets with cutting-edge cybersecurity solutions. We specialize in threat detection, risk assessment, and security automation to help businesses mitigate cyber risks, safeguard sensitive data, and maintain compliance with industry standards."
            },
            {
              title: "Tools Integration",
              desc: "Streamline your operations with seamless integration of business tools and technologies. We enhance system connectivity, automate workflows, and improve overall efficiency by ensuring smooth communication between different platforms and applications."
            },
            {
              title: "Data Engineering & Analytics",
              desc: "Turn raw data into valuable insights with our data engineering expertise. We design efficient data pipelines, perform structured data transformations, and implement analytics solutions to help businesses make data-driven decisions."
            },
            {
              title: "Business Intelligence",
              desc: "Make informed strategic decisions with interactive dashboards and advanced reporting solutions. We create data visualization tools that provide real-time analytics, monitor key performance indicators, and uncover actionable insights."
            },
            {
              title: "Machine Learning & AI",
              desc: "Leverage AI-driven solutions to automate processes and gain a competitive edge. Our expertise in predictive modeling, natural language processing, and intelligent automation helps businesses optimize workflows and improve decision-making."
            },
            {
              title: "Web & App Development",
              desc: "Develop modern, high-performance web and mobile applications tailored to your needs. Our solutions focus on security, scalability, and seamless user experiences, ensuring your business stays ahead in the digital landscape."
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service_home"
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
