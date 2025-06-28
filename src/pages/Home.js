// // import React from "react";
// import "./Home.css";
// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { motion } from "framer-motion";

// const Home = () => {
//   const navigate = useNavigate(); // Initialize navigation function

//   const [activeIndex, setActiveIndex] = useState(null);

//   const services = [
//     {
//       title: "IT Solutions",
//       description: "We provide a full spectrum of IT services to support and secure your digital operations. From cloud infrastructure and system automation to cybersecurity and networking, our team ensures your business runs smoothly, efficiently, and safely.",
//       items: ["Cloud Architecture & Security", "Network Design & Load Balancing", "System Automation & Compliance", "Cybersecurity & Threat Monitoring", "IT Tools Integration"]
//     },
//     {
//       title: "Accounting and Taxation Support",
//       description: "Streamline your financial operations with our expert-driven accounting and tax solutions. We assist with data processing, report automation, financial system integration, and compliance tasks to help you maintain accuracy and meet regulations effortlessly.",
//       items: ["Automated Report Generation", "Data Transformation for Finance", "Integration of Accounting Tools", "Tax Data Analytics & Dashboards", "Financial Workflow Optimization"]
//     },
//     {
//       title: "Machine Learning & AI",
//       description: "Unlock intelligent automation and predictive power for your business. Our ML and AI services help organizations build smarter systems, extract insights from data, and automate complex tasks using modern algorithms and models.",
//       // items: ["Predictive Modeling", "Natural Language Processing (NLP)", "Intelligent Data Automation", "Business Forecasting Models", "AI-Powered Decision Systems"]
//       items: []
//     },
//     {
//       title: "Web & App Development",
//       description: "Bring your digital ideas to life with intuitive, secure, and scalable web and mobile applications. We design and develop custom solutions tailored to your audience, combining functionality with sleek, modern design.",
//       // items: ["Web Development (Frontend & Backend)", "Mobile & Desktop App Development", "API Integration & Automation", "UI/UX Design", "Performance & Security Optimization"]
//       items: []
//     }
//   ];

//   const toggleService = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <motion.section
//         className="hero_home"
//         initial={{ opacity: 0, y: -50, scale: 0.9 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//         >
//         <div className="hero_home-overlay">
//           <motion.h1
//             initial={{ opacity: 0, y: -30, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Welcome to RTV Solutions
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Delivering cutting-edge solutions in Cloud, Software, Web, App
//             Development, Cybersecurity, and Tool Integration. With 5+ years of
//             expertise, we help transform ideas into reality with precision and
//             innovation.
//           </motion.p>
//           <motion.button
//             className="hero_home-button"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => {
//               navigate("/services"); // Navigate to About page
//               window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
//             }}
//           >
//             Get Started →
//           </motion.button>
//         </div>
//       </motion.section>

//       <motion.div
//         className="services-section"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Left Column */}
//         <div className="services-left">
//           <p className="title">OUR SERVICES</p>
//           <h2>Solutions We <br /> Provide.</h2>
//           <p>At RTV Solutions, we provide cutting-edge services to help you transform your vision into real results.</p>
//           <div className="buttons">
//             <button onClick={() => navigate("/services")}>View My Work</button>
//             <button onClick={() => navigate("/contact")}>Contact Me</button>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="services-right">
//           {services.map((service, index) => (
//             <div className="service-item" key={index}>
//               <div
//                 className="service-header"
//                 onClick={() => toggleService(index)}
//               >
//                 <h3 className={activeIndex === index ? "ActiveHeading" : ""}>
//                   {service.title}
//                 </h3>
//                 <i className={activeIndex === index ? "ri-subtract-line" : "ri-add-fill"}></i>
//               </div>
//               <div
//                 className={`service-description ${activeIndex === index ? "open" : ""}`}
//               >
//                 <p>{service.description}</p>
//                 <ul>
//                   {service.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>



//       {/* About Us Section with 3D Scroll Effect */}
//       <motion.div
//         className="about_home-preview"
//         initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2>Who We Are</h2>
//         <p>
//             At RTV Solutions, we bring over 5 years of expertise, delivering innovative and impactful digital solutions. Our journey began with a mission to empower businesses through cutting-edge technologies, and today, we're proud to serve clients across various industries.
//         </p>
//         <p>
//             We specialize in Cloud Solutions, Software Development, Web and App Development, Cybersecurity, and Tools Integration. With a commitment to excellence and a client-focused approach, we ensure every project is tailored to meet unique business needs.
//         </p>
//         <p>
//             Let's work together to turn your ideas into reality.
//         </p>
        
//         <motion.button
//           className="about_home-button"
//           whileHover={{ scale: 1.2, rotateX: 10 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => {
//             navigate("/about"); // Navigate to About page
//             window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
//           }}
//         >
//           Learn More →
//         </motion.button>
//       </motion.div>

//       {/* Testimonials Section with 3D Scroll Effect */}
//       <motion.div
//         className="testimonials_home"
//         initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2>What Our Clients Say</h2>
//         <div className="testimonial_home-grid">
//           {[
//             {
//               name: "John Doe",
//               feedback:
//                 "RTV Solutions transformed our business with their innovative cloud solutions!",
//             },
//             {
//               name: "Jane Smith",
//               feedback:
//                 "A highly professional team that delivers exceptional software solutions.",
//             },
//             {
//               name: "Mark Johnson",
//               feedback:
//                 "Their cybersecurity expertise gave us peace of mind and protection!",
//             },
//           ].map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="testimonial_home"
//               whileHover={{ scale: 1.1, rotateX: 10 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p>"{testimonial.feedback}"</p>
//               <h4>- {testimonial.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Contact Section with 3D Scroll Effect */}
//       <motion.div
//         className="contact_home-preview"
//         initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 10 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2>Get in Touch</h2>
//         <p>Let's discuss how we can work together to achieve your business goals.</p>
//         <motion.button
//           className="contact_home-preview-button"
//           whileHover={{ scale: 1.2, rotateX: 10 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => {
//             navigate("/contact"); // Navigate to About page
//             window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
//           }}
//         >
//           Contact Us →
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;

"use client"
import Footer from "../components/Footer.js"
import { useState, useEffect } from "react"
import "./Gourang_Home.css"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Home = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const services = [
    {
      title: "IT Solutions",
      description:
        "We provide a full spectrum of IT services to support and secure your digital operations. From cloud infrastructure and system automation to cybersecurity and networking, our team ensures your business runs smoothly, efficiently, and safely.",
      items: [
        "Cloud Architecture & Security",
        "Network Design & Load Balancing",
        "System Automation & Compliance",
        "Cybersecurity & Threat Monitoring",
        "IT Tools Integration",
      ],
    },
    {
      title: "Accounting and Taxation Support",
      description:
        "Streamline your financial operations with our expert-driven accounting and tax solutions. We assist with data processing, report automation, financial system integration, and compliance tasks to help you maintain accuracy and meet regulations effortlessly.",
      items: [
        "Automated Report Generation",
        "Data Transformation for Finance",
        "Integration of Accounting Tools",
        "Tax Data Analytics & Dashboards",
        "Financial Workflow Optimization",
      ],
    },
    {
      title: "Machine Learning & AI",
      description:
        "Unlock intelligent automation and predictive power for your business. Our ML and AI services help organizations build smarter systems, extract insights from data, and automate complex tasks using modern algorithms and models.",
      items: [
        "Predictive Modeling",
        "Natural Language Processing (NLP)",
        "Intelligent Data Automation",
        "Business Forecasting Models",
        "AI-Powered Decision Systems",
      ],
    },
    {
      title: "Web & App Development",
      description:
        "Bring your digital ideas to life with intuitive, secure, and scalable web and mobile applications. We design and develop custom solutions tailored to your audience, combining functionality with sleek, modern design.",
      items: [
        "Web Development (Frontend & Backend)",
        "Mobile & Desktop App Development",
        "API Integration & Automation",
        "UI/UX Design",
        "Performance & Security Optimization",
      ],
    },
  ]

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="home">
      {/* Animated Background Elements */}
      <div className="animated-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
        <div className="gradient-orb orb4"></div>
        <div className="grid-overlay"></div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        className="hero_home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero_content">
          <motion.div
            className="hero_text-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero_title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Leading Software
              <span className="gradient-text"> Solutions</span>
            </motion.h1>

            <motion.p
              className="hero_description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivering cutting-edge solutions in Cloud, Software, Web, App Development, Cybersecurity, and Tool
              Integration. With 5+ years of expertise, we help transform ideas into reality with precision and
              innovation.
            </motion.p>

            <motion.div
              className="hero_buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="hero_home-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/services")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Get Started <span className="button-arrow">→</span>
              </motion.button>

              <motion.button
                className="hero_home-button secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/about")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero_image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero_image">
              <div className="hero_image-glow"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.div
        className="services-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Column */}
        <motion.div className="services-left" variants={fadeInUp}>
          <p className="title">OUR SERVICES</p>
          <h2>
            Solutions We <br /> Provide.
          </h2>
          <p>At RTV Solutions, we provide cutting-edge services to help you transform your vision into real results.</p>
          <div className="buttons">
            <motion.button
              onClick={() => navigate("/services")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button onClick={() => navigate("/contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="services-right"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div className="service-item" key={index} variants={fadeInUp}>
              <div className="service-header" onClick={() => toggleService(index)}>
                <h3 className={activeIndex === index ? "ActiveHeading" : ""}>{service.title}</h3>
                <motion.i
                  className={activeIndex === index ? "ri-subtract-line" : "ri-add-fill"}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="service-description open"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{service.description}</p>
                    {service.items.length > 0 && (
                      <ul>
                        {service.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="about_home-preview"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Who We Are</motion.h2>
        <motion.p variants={fadeInUp}>
          At RTV Solutions, we bring over 5 years of expertise, delivering innovative and impactful digital solutions.
          Our journey began with a mission to empower businesses through cutting-edge technologies, and today, we're
          proud to serve clients across various industries.
        </motion.p>
        <motion.p variants={fadeInUp}>
          We specialize in Cloud Solutions, Software Development, Web and App Development, Cybersecurity, and Tools
          Integration. With a commitment to excellence and a client-focused approach, we ensure every project is
          tailored to meet unique business needs.
        </motion.p>
        <motion.button
          className="about_home-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/about")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          Learn More <span className="button-arrow">→</span>
        </motion.button>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="testimonials_home"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>What Our Clients Say</motion.h2>
        <motion.div
          className="testimonial_home-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            {
              name: "Sarah Johnson",
              role: "CTO, TechCorp",
              feedback:
                "RTV Solutions transformed our entire infrastructure. Their cloud solutions increased our efficiency by 300%!",
            },
            {
              name: "Michael Chen",
              role: "CEO, DataFlow",
              feedback:
                "Exceptional cybersecurity expertise. They protected us from multiple threats and gave us complete peace of mind.",
            },
            {
              name: "Emily Rodriguez",
              role: "Founder, StartupX",
              feedback:
                "Their app development team created exactly what we envisioned. Professional, fast, and innovative.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial_home"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(51, 195, 240, 0.3)",
              }}
            >
              <div className="testimonial_stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p>"{testimonial.feedback}"</p>
              <h4>{testimonial.name}</h4>
              <p className="testimonial_role">{testimonial.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="contact_home-preview"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Ready to Transform Your Business?</motion.h2>
        <motion.p variants={fadeInUp}>Let's discuss how we can work together to achieve your business goals.</motion.p>
        <motion.button
          className="contact_home-preview-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          Contact Us <span className="button-arrow">→</span>
        </motion.button>
      </motion.div>

      {/* Footer */}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Home

