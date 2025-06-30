"use client"

// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // Handle form submission here
  //   console.log("Form submitted:", formData)
  //   console.log("Console: ", process.env)
  //   console.log("Service ID:", process.env.REACT_APP_SERVICE_ID)
  //   console.log("Template ID:", process.env.REACT_APP_TEMPLATE_ID)
  //   console.log("User ID:", process.env.REACT_APP_USER_ID)
  //   emailjs.send(
  //     process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID,
  //     {
  //       firstName: formData.firstName,
  //       lastName: formData.lastName,
  //       email: formData.email,
  //       subject: formData.subject,
  //       message: formData.message,
  //       },
  //     process.env.REACT_APP_USER_ID,
  //   ) .then((res)=>{
  //     console.log('Email sent successfully!', res.status, res.text)
  //     alert("Thanks! We've got your email.")
  //   }).catch((err) => {
  //     console.error('Failed to send email. Error:', err)
  //   })

  //   // Reset form
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    console.log("Form submitted:", formData);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          email: 'crazyduff8@gmail.com',
          subject: 'Test',
          message: 'Hello from the new site!'
        })
      })
      .then(res => res.json())
      .then(data => console.log(data));


      const data = await response.json();
      if (response.ok) {
        // alert("Thanks! We've got your email.");
        setResponseMessage("✅ Email sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      // alert("Failed to send email. Please try again.");
      setResponseMessage("❌ Failed to send email. Please try again.");
    }  finally {
      setLoading(false);
    }
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    // });
  };


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
    <div className="contact">
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
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a question or need a consultation? We'd love to hear from you. Let's discuss how we can help transform
            your business with our innovative solutions.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Content */}
      <motion.div
        className="contact-content"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Contact Info */}
        <motion.div className="contact-info" variants={fadeInUp}>
          <h2>Let's Start a Conversation</h2>
          <p>
            Ready to take your business to the next level? Our team of experts is here to help you navigate the digital
            landscape and achieve your goals.
          </p>

          <div className="contact-details">
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email Us</h3>
                <p>adminrtv@rtv-solutions-pvt.com</p>
              </div>
            </motion.div>
            {/* temporarily blocked */}
{
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 7300063070</p>
              </div>
            </motion.div>
            /*
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>
                  123 Innovation Drive
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
            </motion.div> */}
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="ri-linkedin-fill"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="ri-twitter-fill"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="ri-facebook-fill"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className="ri-instagram-line"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="contact-form-container" variants={fadeInUp}>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className="input-group">
              <motion.div className="input-field" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>
              <motion.div className="input-field" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </motion.div>
            </div>

            <motion.div className="input-field" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            <motion.div className="input-field" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </motion.div>

            <motion.div className="input-field" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <span className="button-arrow">→</span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="faq-section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={fadeInUp}>Frequently Asked Questions</motion.h2>
        <motion.div
          className="faq-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            {
              question: "How long does a typical project take?",
              answer:
                "Project timelines vary based on complexity and scope. Most projects range from 2-12 weeks, with clear milestones and regular updates throughout the process.",
            },
            {
              question: "Do you offer ongoing support?",
              answer:
                "Yes! We provide comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally.",
            },
            {
              question: "What industries do you work with?",
              answer:
                "We work with businesses across various industries including healthcare, finance, e-commerce, education, and technology startups.",
            },
            {
              question: "Can you work with our existing systems?",
              answer:
                "We specialize in integrating with existing systems and can help modernize your current infrastructure while maintaining business continuity.",
            },
          ].map((faq, index) => (
            <motion.div key={index} className="faq-item" variants={fadeInUp}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
