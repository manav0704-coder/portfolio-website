import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';
import { FiDownload, FiMail, FiLinkedin, FiGithub, FiCalendar, FiMapPin, FiBriefcase, FiBook, FiUser, FiCode } from 'react-icons/fi';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  // List of skills
  const skills = [
    {
      category: "Frontend Technologies",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "MySQL", "JSON Server"]
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "C++", "SQL"]
    },
    {
      category: "Design & Tools",
      items: ["Figma", "Photoshop", "Git & GitHub"]
    }
  ];

  // Professional experience data
  const experiences = [
    {
      title: "Web Development Intern",
      company: "CodSoft",
      period: "May 1, 2024 - June 1, 2024",
      description: "Worked on real-world frontend projects, enhanced skills in HTML, CSS, JavaScript, and React. Gained hands-on experience in building responsive and interactive user interfaces.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Web Development Project",
      company: "University Project",
      period: "Sep 2022 - Dec 2022",
      description: "Led a team of 3 to develop a full-stack e-commerce platform with product management, shopping cart, and user authentication. Implemented frontend using React and backend using Node.js.",
      technologies: ["React.js", "Node.js", "MySQL", "Express"]
    }
  ];

  // Education details
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Pratibha College of Commerce and Computer Studies",
      period: "2022 - 2025",
      gpa: "9.5/10",
      description: "Focusing on software development, web technologies, and database management."
    },
    {
      degree: "Web Development Certification",
      institution: "Online Learning Platform",
      period: "2022",
      description: "Completed comprehensive courses in modern web development technologies and best practices."
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen pb-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Get to know more about me, my background, and what drives my passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Profile image - 1 column */}
          <div className="md:col-span-1">
            <div className="sticky top-28">
              <div className="rounded-xl overflow-hidden mb-6">
                <img 
                  src={profileImage} 
                  alt="Manav Pardeshi profile" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">Personal Details</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Name:</span> Manav Pardeshi
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMapPin className="text-accent-light dark:text-accent-dark" />
                    <span>India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMail className="text-accent-light dark:text-accent-dark" />
                    <a href="mailto:manavpardeshi9@gmail.com" className="text-accent-light dark:text-accent-dark hover:underline">
                      manavpardeshi9@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiBook className="text-accent-light dark:text-accent-dark" />
                    <span>BCA (GPA: 9.5/10)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiBriefcase className="text-accent-light dark:text-accent-dark" />
                    <span>Frontend Development, UI Design</span>
                  </li>
                </ul>
              </div>

              {/* CV Download Section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Download my resume for a comprehensive view of my skills, education, and professional experience.
                </p>
                <a 
                  href="/Manav-Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Manav_Pardeshi_Resume.pdf"
                  className="flex items-center justify-center gap-2 btn btn-primary w-full"
                >
                  <FiDownload /> Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://github.com/manav0704-coder" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/manav-pardeshi/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-accent-light dark:text-accent-dark hover:underline"
                  >
                    <FiLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content area - 2 columns */}
          <div className="md:col-span-2 space-y-12">
            {/* Bio section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center rounded-lg">
                  <FiUser className="text-accent-light dark:text-accent-dark" />
                </span>
                Professional Summary
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Hi, I'm Manav Pardeshi, a passionate and detail-oriented Frontend Developer and UI Designer 
                  currently pursuing my Bachelor of Computer Applications (BCA) with a strong academic performance, 
                  maintaining a GPA of 9.5 out of 10.
                </p>
                <p>
                  I specialize in building responsive, user-centric web applications with clean code and beautiful 
                  interfaces. My core strength lies in React.js, JavaScript, HTML, and CSS, and I also have experience 
                  with backend technologies like Node.js and databases like MySQL.
                </p>
                <p>
                  I enjoy transforming UI/UX designs into functional websites and have hands-on experience using 
                  Figma and Photoshop for crafting and translating designs into production-ready interfaces.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, experimenting with photography, 
                  or learning about the latest web development technologies.
                </p>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center rounded-lg">
                  <FiBriefcase className="text-accent-light dark:text-accent-dark" />
                </span>
                Professional Experience
              </h2>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative border-l-4 border-accent-light dark:border-accent-dark"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-accent-light dark:text-accent-dark font-medium">{exp.company}</p>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mb-3 text-sm">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-secondary-light dark:bg-secondary-dark px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center rounded-lg">
                  <FiBook className="text-accent-light dark:text-accent-dark" />
                </span>
                Education
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-accent-light dark:border-accent-dark"
                    variants={itemVariants}
                  >
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <p className="text-accent-light dark:text-accent-dark font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mb-1 text-sm">
                      <FiCalendar />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <p className="text-gray-700 dark:text-gray-300 mb-2">GPA: {edu.gpa}</p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Skills section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-light/10 dark:bg-accent-dark/20 flex items-center justify-center rounded-lg">
                  <FiCode className="text-accent-light dark:text-accent-dark" />
                </span>
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                    variants={itemVariants}
                  >
                    <h3 className="font-bold text-lg mb-4">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="bg-secondary-light dark:bg-secondary-dark px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About; 