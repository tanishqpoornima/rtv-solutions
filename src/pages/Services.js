import React, { useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";

const services = [
  {
    title: "IT Solutions",
    description:
      "We offer comprehensive IT services tailored to modern business needs, enabling secure operations, seamless integrations, and long-term scalability. Our goal is to ensure your IT infrastructure is efficient, secure, and aligned with your business objectives.",
    subServices: [
      {
        name: "Software Development",
        description:
          "Custom software solutions tailored to your business needs can enhance productivity and streamline operations. Our team specializes in developing scalable, secure, and efficient software applications that cater to various industries. Whether you need enterprise software, automation tools, or business process management systems, we ensure a seamless development process from design to deployment."
      },
      {
        name: "Cloud Architecture & Security",
        description:
          "We help businesses build and maintain secure, high-performance cloud environments. From infrastructure planning and migration to access management and compliance, we ensure your cloud solutions are optimized for flexibility and safety."
      },
      {
        name: "Network Design & Load Balancing",
        description:
          "Our team designs robust, high-availability network systems that ensure fast and secure communication across your organization. With optimized routing, traffic distribution, and fault tolerance, we reduce downtime and maximize performance."
      },
      {
        name: "Cybersecurity & Threat Monitoring",
        description:
          "We provide multi-layered cybersecurity strategies including real-time threat monitoring, incident response planning, and vulnerability assessments. Our approach helps protect sensitive data and ensures your systems are safeguarded against evolving cyber threats."
      },
      {
        name: "System Automation & Tools Integration",
        description:
          "We help businesses reduce manual workloads and boost efficiency by automating workflows and integrating critical business tools. Our solutions are designed to ensure seamless operations across your digital ecosystem."
      },
      {
        name: "Data Engineering & Analytics",
        description:
          "Data is one of the most valuable assets for any business. We design and implement data pipelines, transform raw information into structured insights, and enable real-time analytics. Our solutions help businesses harness the power of data for better decision-making, forecasting, and overall efficiency."
      },
      {
        name: "Business Intelligence",
        description:
          "Make data-driven decisions with our business intelligence solutions. We develop interactive dashboards, real-time reporting tools, and performance-tracking systems that provide actionable insights. Our goal is to help businesses monitor key performance indicators (KPIs), track trends, and optimize strategies for sustained growth."
      }
    ]
  },
  {
    title: "Accounting and Taxation Support",
    description:
      "Our accounting and taxation support services are designed to simplify complex financial tasks using smart automation, structured data handling, and integrated reporting systems. We empower finance teams to work faster, more accurately, and with full compliance.",
    subServices: [
      {
        name: "Automated Report Generation",
        description:
          "Generate accurate and consistent financial reports effortlessly. We automate everything from income statements to audit logs, reducing manual workload and improving data accuracy."
      },
      {
        name: "Data Transformation for Finance",
        description:
          "We clean and restructure financial data for advanced analytics, dashboards, or compliance purposes. Our transformation pipelines ensure your financial data is always accurate and ready for use."
      },
      {
        name: "Integration of Accounting Tools",
        description:
          "We connect your accounting platform with other business systems like CRM, ERP, and HR tools—ensuring real-time sync, reducing data duplication, and enabling smoother workflows."
      },
      {
        name: "Tax Data Analytics & Dashboards",
        description:
          "Visualize your tax data with customized dashboards that help track liabilities, forecast deductions, and ensure compliance with regulatory timelines."
      },
      {
        name: "Financial Workflow Optimization",
        description:
          "We help automate and refine finance operations such as invoicing, expense tracking, reconciliation, and tax submissions—enhancing speed, accuracy, and transparency."
      }
    ]
  },
  {
    title: "Machine Learning & AI",
    description:
      "We offer intelligent solutions that enable businesses to automate processes, make data-driven decisions, and unlock deeper insights. Our services include building predictive models, implementing smart automation, and integrating AI-powered systems that adapt to your business needs. From data preparation and model training to deployment and monitoring, we ensure end-to-end support for your AI journey.",
    subServices: []
  },
  {
    title: "Web & App Development",
    description:
      "We design and develop secure, scalable, and high-performance web and mobile applications tailored to your goals. Our solutions are built with clean UI/UX, responsive design, and strong backend systems to ensure seamless user experiences across all devices. Whether it’s a customer-facing platform or an internal business tool, we deliver fully functional digital products from concept to launch.",
    subServices: []
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
  };

  const toggleSubService = (subIndex) => {
    setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex);
  };

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

      {/* Accordion Section */}
      <motion.div
        className="accordion-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="accordion-left">
          <div className="title">Our Services</div>
          <h2>Solutions We Provide.</h2>
          <p>
            Discover how RTV Solutions transforms ideas into digital
            excellence—from IT and finance to AI and development.
          </p>
        </div>

        <div className="accordion-right">
          {services.map((service, index) => (
            <div className="accordion-item" key={index}>
              <div
                className="accordion-header"
                onClick={() => toggleService(index)}
              >
                <h3 className={activeIndex === index ? "active" : ""}>
                  {service.title}
                </h3>
                <i
                  className={`ri-${
                    activeIndex === index ? "subtract-line" : "add-line"
                  }`}
                ></i>
              </div>
              <div
                className={`accordion-body ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p className="main-desc">{service.description}</p>
                {service.subServices.map((sub, subIndex) => (
                  <div className="sub-accordion" key={subIndex}>
                    <div
                      className={`sub-header ${
                        activeSubIndex === subIndex ? "active" : ""
                      }`}
                      onClick={() => toggleSubService(subIndex)}
                    >
                      <span>{sub.name}</span>
                      <i
                        className={`ri-${
                          activeSubIndex === subIndex
                            ? "subtract-line"
                            : "add-line"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`sub-content ${
                        activeSubIndex === subIndex ? "open" : ""
                      }`}
                    >
                      <p>{sub.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
