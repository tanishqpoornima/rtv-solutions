"use client"

import { useState, useEffect } from "react"
import "./Services.css"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    title: "IT Solutions",
    icon: "💻",
    description:
      "We offer comprehensive IT services tailored to modern business needs, enabling secure operations, seamless integrations, and long-term scalability. Our goal is to ensure your IT infrastructure is efficient, secure, and aligned with your business objectives.",
    subServices: [
      {
        name: "Software Development",
        description:
          "Custom software solutions tailored to your business needs can enhance productivity and streamline operations. Our team specializes in developing scalable, secure, and efficient software applications that cater to various industries. Whether you need enterprise software, automation tools, or business process management systems, we ensure a seamless development process from design to deployment.",
      },
      {
        name: "Cloud Architecture & Security",
        description:
          "We help businesses build and maintain secure, high-performance cloud environments. From infrastructure planning and migration to access management and compliance, we ensure your cloud solutions are optimized for flexibility and safety.",
      },
      {
        name: "Network Design & Load Balancing",
        description:
          "Our team designs robust, high-availability network systems that ensure fast and secure communication across your organization. With optimized routing, traffic distribution, and fault tolerance, we reduce downtime and maximize performance.",
      },
      {
        name: "Cybersecurity & Threat Monitoring",
        description:
          "We provide multi-layered cybersecurity strategies including real-time threat monitoring, incident response planning, and vulnerability assessments. Our approach helps protect sensitive data and ensures your systems are safeguarded against evolving cyber threats.",
      },
      {
        name: "System Automation & Tools Integration",
        description:
          "We help businesses reduce manual workloads and boost efficiency by automating workflows and integrating critical business tools. Our solutions are designed to ensure seamless operations across your digital ecosystem.",
      },
      {
        name: "Data Engineering & Analytics",
        description:
          "Data is one of the most valuable assets for any business. We design and implement data pipelines, transform raw information into structured insights, and enable real-time analytics. Our solutions help businesses harness the power of data for better decision-making, forecasting, and overall efficiency.",
      },
      {
        name: "Business Intelligence",
        description:
          "Make data-driven decisions with our business intelligence solutions. We develop interactive dashboards, real-time reporting tools, and performance-tracking systems that provide actionable insights. Our goal is to help businesses monitor key performance indicators (KPIs), track trends, and optimize strategies for sustained growth.",
      },
    ],
  },
  {
    title: "Accounting & Taxation",
    icon: "📊",
    description:
      "Our accounting and taxation support services are designed to simplify complex financial tasks using smart automation, structured data handling, and integrated reporting systems. We empower finance teams to work faster, more accurately, and with full compliance.",
    subServices: [
      {
        name: "Automated Report Generation",
        description:
          "Generate accurate and consistent financial reports effortlessly. We automate everything from income statements to audit logs, reducing manual workload and improving data accuracy.",
      },
      {
        name: "Data Transformation for Finance",
        description:
          "We clean and restructure financial data for advanced analytics, dashboards, or compliance purposes. Our transformation pipelines ensure your financial data is always accurate and ready for use.",
      },
      {
        name: "Integration of Accounting Tools",
        description:
          "We connect your accounting platform with other business systems like CRM, ERP, and HR tools—ensuring real-time sync, reducing data duplication, and enabling smoother workflows.",
      },
      {
        name: "Tax Data Analytics & Dashboards",
        description:
          "Visualize your tax data with customized dashboards that help track liabilities, forecast deductions, and ensure compliance with regulatory timelines.",
      },
      {
        name: "Financial Workflow Optimization",
        description:
          "We help automate and refine finance operations such as invoicing, expense tracking, reconciliation, and tax submissions—enhancing speed, accuracy, and transparency.",
      },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "🤖",
    description:
      "We offer intelligent solutions that enable businesses to automate processes, make data-driven decisions, and unlock deeper insights. Our services include building predictive models, implementing smart automation, and integrating AI-powered systems that adapt to your business needs. From data preparation and model training to deployment and monitoring, we ensure end-to-end support for your AI journey.",
    subServices: [
      {
        name: "Predictive Analytics",
        description:
          "Build powerful predictive models that help forecast trends, customer behavior, and business outcomes using advanced machine learning algorithms.",
      },
      {
        name: "Natural Language Processing",
        description:
          "Implement NLP solutions for text analysis, sentiment analysis, chatbots, and automated content processing to enhance customer interactions.",
      },
      {
        name: "Computer Vision",
        description:
          "Develop computer vision applications for image recognition, quality control, automated inspection, and visual data analysis.",
      },
    ],
  },
  {
    title: "Web & App Development",
    icon: "📱",
    description:
      "We design and develop secure, scalable, and high-performance web and mobile applications tailored to your goals. Our solutions are built with clean UI/UX, responsive design, and strong backend systems to ensure seamless user experiences across all devices. Whether it's a customer-facing platform or an internal business tool, we deliver fully functional digital products from concept to launch.",
    subServices: [
      {
        name: "Frontend Development",
        description:
          "Create stunning, responsive user interfaces using modern frameworks like React, Vue.js, and Angular with focus on user experience and performance.",
      },
      {
        name: "Backend Development",
        description:
          "Build robust server-side applications with scalable architecture, secure APIs, and efficient database management using cutting-edge technologies.",
      },
      {
        name: "Mobile App Development",
        description:
          "Develop native and cross-platform mobile applications for iOS and Android with seamless performance and intuitive user interfaces.",
      },
    ],
  },
]

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeSubIndex, setActiveSubIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleService = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
    setActiveSubIndex(null)
  }

  const toggleSubService = (subIndex) => {
    setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex)
  }

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
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="services">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
        <div className="gradient-orb orb4"></div>
        <div className="grid-overlay"></div>

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
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
      <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            It All Begins with Your Vision. Whether you're looking to streamline your business operations, launch a new
            digital platform, or bring a creative idea to life, RTV Solutions is here to make it happen. We specialize
            in creating tailored, innovative solutions that help your story stand out in a crowded digital space.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From crafting seamless web and app experiences to implementing robust cybersecurity and cloud strategies, we
            ensure your journey to success is backed by expertise and precision. Let us help you transform your vision
            into reality with our trusted services and client-first approach.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Services Overview Cards */}
      <motion.div
        className="services-overview"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>What We Offer</motion.h2>
        <motion.div className="services-grid" variants={staggerContainer} >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description.substring(0, 150)}...</p>
              <div className="service-count">{service.subServices.length} Services</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Accordion Section */}
      <motion.div
        className="accordion-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div className="accordion-left" variants={fadeInUp}>
          <div className="title">DETAILED SERVICES</div>
          <h2>
            Solutions We <br /> Provide.
          </h2>
          <p>
            Discover how RTV Solutions transforms ideas into digital excellence—from IT and finance to AI and
            development.
          </p>
        </motion.div>

        <motion.div
          className="accordion-right"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div className="accordion-item" key={index} variants={fadeInUp}>
              <div className="accordion-header" onClick={() => toggleService(index)}>
                <div className="header-content">
                  <span className="service-icon-small">{service.icon}</span>
                  <h3 className={activeIndex === index ? "active" : ""}>{service.title}</h3>
                </div>
                <motion.i
                  className={`ri-${activeIndex === index ? "subtract-line" : "add-line"}`}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="accordion-body open"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="main-desc">{service.description}</p>
                    {service.subServices.map((sub, subIndex) => (
                      <div className="sub-accordion" key={subIndex}>
                        <div
                          className={`sub-header ${activeSubIndex === subIndex ? "active" : ""}`}
                          onClick={() => toggleSubService(subIndex)}
                        >
                          <span>{sub.name}</span>
                          <motion.i
                            className={`ri-${activeSubIndex === subIndex ? "subtract-line" : "add-line"}`}
                            animate={{ rotate: activeSubIndex === subIndex ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          ></motion.i>
                        </div>
                        <AnimatePresence>
                          {activeSubIndex === subIndex && (
                            <motion.div
                              className="sub-content open"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p>{sub.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="cta-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Ready to Get Started?</motion.h2>
        <motion.p variants={fadeInUp}>
          Let's discuss how our services can help transform your business and achieve your goals.
        </motion.p>
        <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Contact Us Today <span className="button-arrow">→</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Services
