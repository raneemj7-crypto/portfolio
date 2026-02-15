import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaFigma,
  FaMicrosoft,
  FaStar,
} from "react-icons/fa";
import {
  SiMysql,
} from "react-icons/si";

import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import ContactForm from './ContactForm.jsx';
import Bloom1 from "./images/Bloom1.png";
import Bloom2 from "./images/Bloom2.png";
import Bloom3 from "./images/Bloom3.png";
import Bloom4 from "./images/Bloom4.png";
import Bloom5 from "./images/Bloom5.png";


import opti1 from './images/cano1.jpg';
import opti2 from './images/cano2.jpg';
import opti3 from './images/cano3.png';

import c1 from './images/c1.png';
import c2 from './images/c2.png';
import c3 from './images/c3.png';
import c4 from './images/c4.png';

// Smooth scroll
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const projects = [
  {
    title: "Bloom",
    images: [Bloom1, Bloom2, Bloom3, Bloom4, Bloom5],
    description: "Bloom is a modern, plant-centric web app that combines e-commerce, subscriptions, AI guidance, and community support to help users discover, manage, and care for plants — delivering a seamless, interactive, and data-driven user experience.",
    github: "https://github.com/raneemj7-crypto/Bloom-Website",
  },
  {
    title: "Cano",
    images: [opti1, opti2, opti3],
    description: " Cano is a Smart AI Cane powered by MemryX Edge AI. It uses a camera and AI to detect obstacles, stairs, and traffic lights, helping visually impaired users navigate safely. Future work will add sensors and vibration or audio feedback for enhanced guidance.",
    github: "https://github.com/raneemj7-crypto/MemryX-smart-cane",
  },
  {
    title: "Factory-Chocolate",
    images: [c1, c2, c3,c4],
    description: "Chocolate Factory Management System - A database-driven Java application for managing chocolate production, inventory, orders, and suppliers. Features role-based interfaces for employees (add/delete products, view orders/suppliers) and customers (browse chocolates, view order history). Built with MySQL, Java Swing GUI, and normalized 3NF database.",
    github: "https://github.com/raneemj7-crypto/Chocolate-Factory-",
  },
];


const skills = [
  { name: "Java Programming", icon: FaJava },
  { name: "Python Programming", icon: FaPython },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaJs },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "SQL", icon: SiMysql },
  { name: "Database Development", icon: SiMysql },
  { name: "Machine Learning", icon: FaPython },
  { name: "UI/UX Design (Figma)", icon: FaFigma },
  { name: "Project Management", icon: FaMicrosoft },
  { name: "Teaching & Mentoring", icon: FaStar },
  { name: "Research & Technical Documentation", icon: FaFileAlt },
  { name: "Problem Solving & Critical Thinking", icon: FaStar },
  { name: "Team Collaboration", icon: FaStar },
  { name: "Leadership & Adaptability", icon: FaStar },
];



// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDescription = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a192f]">
      <div className="min-h-screen w-full bg-white text-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white transition-colors duration-500">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-xl font-bold text-indigo-600">
              Raneem AbuMoustafa
            </h1>
            <ul className="hidden md:flex space-x-6 text-black-300 font-medium">
              {["About", "Skills", "Projects", "Contact"].map((section) => (
                <li
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="cursor-pointer hover:text-indigo-400 transition"
                >
                  {section}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-indigo-500 hover:bg-indigo-500 hover:text-white transition"
            >
              {darkMode ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdDarkMode size={20} />
              )}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          id="about"
          className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-28"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 flex flex-col items-center md:items-start space-y-6"
            variants={fadeInUp}
          >
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-5xl font-bold leading-tight">
                Hi, I am Raneem AbuMoustafa
              </h1>
              <p className="text-lg font-medium text-indigo-300">
                Software Engineer |{" "}
                <span className="text-indigo-400">Artifact Intelligence & Data Science</span>
              </p>
              <p className="text-gray-400">📍 Riyadh, Saudi Arabia</p>
            </div>

            {/* Contact Buttons */}
            <div className="flex space-x-4">
              <a
                href="mailto:raneemabumustafa@gmail.com"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="https://github.com/raneemj7-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/raneem-abumoustafa-533148346"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://drive.google.com/drive/folders/1yUAb7F3_FPpvqC90MMovT2eHVCtwS60G?usp=sharing"
                target="_blank"
                className="px-4 py-2 flex items-center gap-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
              >
                <FaFileAlt /> CV
              </a>
            </div>
          </motion.div>

          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-black dark:text-gray-300 leading-relaxed">
              Software Engineering student specializing in Artificial Intelligence and
              Data Science with a 3.98 GPA and Dean’s Honors recognition. Experienced in
              full-stack development using React, Node.js, Java, Python, and SQL, with
              a strong background in database systems and machine learning.

              I enjoy building scalable, intelligent, and user-focused applications that
              combine clean design with efficient backend architecture, while continuously
              growing through research, teaching, and real-world project development.
            </p>


          </div>
        </motion.section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex flex-col items-center justify-center px-6"
        >
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <skill.icon size={40} className="text-indigo-400 mb-2" />
                <p className="text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col items-center justify-center px-6"
        >
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            {projects.map((project, index) => {
              const isExpanded = expanded[index];
              const shortDescription =
                project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description;

              return (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform"
                >
                  {/* Slider */}
                  <motion.div
                    className="relative w-full h-64 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="flex w-full h-full"
                      animate={{ x: ["0%", "-50%"] }} // -50% if duplicating array
                      transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear",
                      }}
                    >
                      {[...project.images, ...project.images].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title}-${i}`}
                          className="w-full h-64 object-cover flex-shrink-0"
                        />
                      ))}
                    </motion.div>
                  </motion.div>

                  <div className="flex items-center justify-between mb-2 mt-4">
                    <h3 className="text-xl font-semibold text-indigo-400">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-indigo-500 text-2xl"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <p
                    className="text-gray-300 text-sm cursor-pointer"
                    onClick={() => toggleDescription(index)}
                  >
                    {isExpanded ? project.description : shortDescription}
                    {project.description.length > 100 && (
                      <span className="text-indigo-400 ml-1">
                        {isExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <a
              href="https://github.com/raneemj7-crypto"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
            >
              View More Projects on GitHub →
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center px-4"
        >
          <h2 className="text-3xl font-bold mb-6">Let's have chat :)</h2>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="w-full py-6 px-8 bg-black/40 text-black border-t border-gray-700 flex items-center justify-between">
          <span>© 2026 Raneem AbuMoustafa.</span>
          <div className="flex space-x-4">
            <a
              href="https://github.com/raneemj7-crypto/Chocolate-Factory-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaGithub className="text-xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/raneem-abumoustafa-533148346"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaLinkedin className="text-xl text-white" />
            </a>
            <a
              href="mailto:raneemabumustafa@gmail.com"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-indigo-600 transition"
            >
              <FaEnvelope className="text-xl text-white" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
