"use client"

import { useEffect, useState, useRef } from "react"
import "./About.css"
import { motion, useInView } from "framer-motion"
import { useNavigate } from "react-router-dom"

const About = () => {
  const achievementsRef = useRef(null)
  const isInView = useInView(achievementsRef)
  const [clients, setClients] = useState(0)
  const [projects, setProjects] = useState(0)
  const [services, setServices] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (isInView) {
      let clientCount = 0
      let projectCount = 0
      let serviceCount = 0
      const interval = setInterval(() => {
        if (clientCount < 50) {
          setClients((clientCount += 2))
        }
        if (projectCount < 100) {
          setProjects((projectCount += 4))
        }
        if (serviceCount < 10) {
          setServices((serviceCount += 1))
        }
        if (clientCount >= 50 && projectCount >= 100 && serviceCount >= 10) {
          clearInterval(interval)
        }
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isInView])

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
    <div className="about">
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
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We aim to provide the highest level of service possible in everything that we deliver. We invest time and
            effort into making absolutely sure that we understand a client's business and its needs so as to tailor our
            approach and the advice that we give to achieve optimum results.
          </motion.p>
          <motion.button
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => {
              navigate("/contact")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            Succeed With Us <span className="button-arrow">→</span>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <motion.div
        className="achievements"
        ref={achievementsRef}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div className="achievement" variants={fadeInUp}>
          <motion.h2 animate={{ scale: isInView ? [1, 1.1, 1] : 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {clients}+
          </motion.h2>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div className="achievement" variants={fadeInUp}>
          <motion.h2 animate={{ scale: isInView ? [1, 1.1, 1] : 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            {projects}+
          </motion.h2>
          <p>Projects Completed</p>
        </motion.div>
        <motion.div className="achievement" variants={fadeInUp}>
          <motion.h2 animate={{ scale: isInView ? [1, 1.1, 1] : 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            {services}+
          </motion.h2>
          <p>Services Offered</p>
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        className="about-container"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="image-container">
            <div className="image-glow"></div>
            <div className="placeholder-image">
              <div className="image-content">
                <h3>Innovation</h3>
                <p>Driving Technology Forward</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2>Who We Are</h2>
          <p>
            At RTV Solutions, we are a passionate team of innovators, problem-solvers, and technologists dedicated to
            helping businesses thrive in the digital era. Founded over 5 years ago, our journey began with a vision to
            provide tailored and impactful solutions across Cloud Technologies, Software Development, Cybersecurity, and
            more.
          </p>
          <p>
            What sets us apart is our commitment to excellence and a client-centric approach. We pride ourselves on
            building strong relationships with our clients, delivering solutions that not only meet but exceed
            expectations. Our team's expertise and creativity allow us to tackle complex challenges and turn ideas into
            reality.
          </p>
          <p>
            Whether you're a growing startup or an established enterprise, RTV Solutions is here to empower your
            success. Together, let's write a story of innovation, collaboration, and transformation.
          </p>
        </motion.div>
      </motion.div>

      {/* Working Methodology Section */}
      <motion.div
        className="working-methodology"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Our Working Methodology</motion.h2>
        <motion.div
          className="methodology-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            { icon: "🔍", text: "Understanding the business of the client", step: "01" },
            { icon: "📊", text: "Analyzing the need and preparing a work plan", step: "02" },
            { icon: "⚡", text: "Offer practical implementation", step: "03" },
            { icon: "👥", text: "Assigning an expert as a point of contact", step: "04" },
          ].map((method, index) => (
            <motion.div
              key={index}
              className="method"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
            >
              <div className="method-step">{method.step}</div>
              <div className="method-icon">{method.icon}</div>
              <p>{method.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Our Values Section */}
      <motion.div
        className="about-values"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Our Core Values</motion.h2>
        <motion.div
          className="values-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            {
              title: "Innovation",
              desc: "We continuously explore new technologies to offer cutting-edge solutions.",
              icon: "💡",
            },
            {
              title: "Integrity",
              desc: "We build trust through transparency, ethics, and responsibility.",
              icon: "🤝",
            },
            {
              title: "Client-Centric",
              desc: "Our success is measured by our clients' growth and satisfaction.",
              icon: "🎯",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
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
        <motion.h2 variants={fadeInUp}>Ready to Start Your Journey?</motion.h2>
        <motion.p variants={fadeInUp}>
          Let's work together to transform your business with innovative solutions.
        </motion.p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate("/contact")
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          Get Started Today <span className="button-arrow">→</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About
