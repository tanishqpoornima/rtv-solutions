import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Services</h1>
          <p>
            It All Begins with Your Vision. Whether you're looking to streamline your business operations, launch a new digital platform, or bring a creative idea to life, RTV Solutions is here to make it happen. We specialize in creating tailored, innovative solutions that help your story stand out in a crowded digital space.
          </p>
          <p>
            From crafting seamless web and app experiences to implementing robust cybersecurity and cloud strategies, we ensure your journey to success is backed by expertise and precision. Let us help you transform your vision into reality with our trusted services and client-first approach.
          </p>
          <p>
            Your story is unique—let us help you share it with the world.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.div 
        className="service-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Services</h2>
        <div className="service-grid">
          {[
            {
              title: "Cloud Solutions",
              desc: "Empower your business with scalable, secure, and cost-effective cloud solutions. We specialize in cloud migration, architecture design, and optimization to help you maximize the potential of cloud technologies.",
            },
            {
              title: "Software Development",
              desc: "Unlock your business potential with custom software solutions built to meet your exact needs. Our team excels at developing robust, efficient, and scalable applications that simplify operations and enhance productivity.",
            },
            {
              title: "Web Development",
              desc: "Craft visually stunning and fully responsive websites that leave a lasting impression on your audience. Whether it’s an e-commerce platform, corporate website, or a personal portfolio, we bring your vision to life with modern designs and seamless functionality.",
            },
            {
              title: "App Development",
              desc: "Turn your ideas into functional, feature-rich mobile and desktop applications that deliver exceptional user experiences. Our team combines creativity and technical expertise to develop intuitive, high-performing applications.",
            },
            {
              title: "Cybersecurity",
              desc: "Safeguard your business with advanced cybersecurity measures designed to protect sensitive data, detect threats, and ensure compliance with industry standards. Our experts provide proactive monitoring, risk assessments, and defense strategies.",
            },
            {
              title: "Tools Integration",
              desc: "Simplify and enhance your workflow by integrating powerful tools and technologies tailored to your needs. From connecting existing systems to introducing new solutions, we help businesses automate processes and improve collaboration.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
