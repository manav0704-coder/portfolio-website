import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiCode, FiLayout, FiMonitor, FiDatabase, FiExternalLink } from 'react-icons/fi';
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 } 
    }
  };

  const backgroundVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const backgroundShapeVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.5,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 8,
        ease: "easeInOut"
      }
    }
  };
  
  // Particle animation
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create 25 particles
    const newParticles = [];
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, []);

  // Featured Projects
  const featuredProjects = [
    {
      id: 1,
      title: "All Maharashtra Taekwondo Association (In Progress)",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "/projects"
    },
    {
      id: 2,
      title: "Library Management System",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      link: "/projects"
    },
  ];

  // Services
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: "UI/UX Design",
      description: "Creating aesthetically pleasing and user-friendly designs with Figma and other design tools.",
      icon: <FiLayout className="w-6 h-6" />
    },
    {
      title: "Responsive Web Design",
      description: "Developing websites that work seamlessly across all devices and screen sizes.",
      icon: <FiMonitor className="w-6 h-6" />
    },
    {
      title: "Backend Integration",
      description: "Connecting frontends with backend services and databases for full-stack solutions.",
      icon: <FiDatabase className="w-6 h-6" />
    }
  ];

  // Skills with percentages
  const skills = [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI Design", level: 80 },
    { name: "Node.js", level: 75 }
  ];
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-light/5 to-transparent dark:via-accent-dark/5"></div>
        
        {/* Dynamic geometric shapes */}
        <motion.div 
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
        >
          {/* Large circle */}
          <motion.div 
            className="absolute top-[15%] left-[10%] w-60 h-60 rounded-full bg-accent-light dark:bg-accent-dark opacity-5 blur-3xl"
            variants={backgroundShapeVariants}
          />
          
          {/* Medium circle */}
          <motion.div 
            className="absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full bg-accent-light dark:bg-accent-dark opacity-5 blur-3xl"
            variants={backgroundShapeVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Small circle */}
          <motion.div 
            className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-accent-light to-blue-300 dark:from-accent-dark dark:to-blue-400 opacity-5 blur-2xl"
            variants={backgroundShapeVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Animated particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-accent-light dark:bg-accent-dark"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                y: ["0%", "10%", "0%"],
                x: [`${particle.x}%`, `${particle.x + (Math.random() * 10 - 5)}%`, `${particle.x}%`],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Geometric lines */}
          <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent-light/20 to-transparent dark:via-accent-dark/20"></div>
          <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-accent-light/15 to-transparent dark:via-accent-dark/15"></div>
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-accent-light/10 to-transparent dark:via-accent-dark/10"></div>
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-accent-light/10 to-transparent dark:via-accent-dark/10"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblRyYW5zZm9ybT0ic2NhbGUoMSkiPjxwYXRoIGQ9Ik0wIDIwaDQwdjAuNUgweiIgZmlsbD0icmdiYSgxMDAsIDExNiwgMTM5LCAwLjA0KSIvPjxwYXRoIGQ9Ik0wIDQwaDQwdjAuNUgweiIgZmlsbD0icmdiYSgxMDAsIDExNiwgMTM5LCAwLjA0KSIvPjxwYXRoIGQ9Ik0wIDBoNDB2MC41SDB6IiBmaWxsPSJyZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDQpIi8+PHBhdGggZD0iTTIwIDBoMC41djQwaC0wLjV6IiBmaWxsPSJyZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDQpIi8+PHBhdGggZD0iTTQwIDBoMC41djQwaC0wLjV6IiBmaWxsPSJyZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDQpIi8+PHBhdGggZD0iTTAgMGgwLjV2NDBoLTAuNXoiIGZpbGw9InJnYmEoMTAwLCAxMTYsIDEzOSwgMC4wNCkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50 dark:opacity-30"></div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="container-custom pt-20 pb-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-accent-light/10 text-accent-light dark:bg-accent-dark/10 dark:text-accent-dark"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Frontend Developer & UI Designer
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-accent-light dark:text-accent-dark">Manav Pardeshi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              A passionate Frontend Developer and UI Designer crafting responsive and user-centric web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary flex items-center gap-2">
                View Projects <FiArrowRight />
              </Link>
              <a href="/Manav-Resume.pdf" className="btn btn-outline flex items-center gap-2" download>
                Download CV <FiDownload />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-accent-light dark:border-accent-dark shadow-2xl bg-white dark:bg-gray-900">
              <img 
                src={profileImage} 
                alt="Manav Pardeshi profile" 
                className="w-full h-full object-cover"
              />

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-5 right-0 w-16 h-16 bg-secondary-light dark:bg-secondary-dark rounded-full flex items-center justify-center shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <FiCode className="w-8 h-8 text-accent-light dark:text-accent-dark" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 left-0 w-14 h-14 bg-secondary-light dark:bg-secondary-dark rounded-full flex items-center justify-center shadow-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <FiLayout className="w-7 h-7 text-accent-light dark:text-accent-dark" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="relative">
        <svg className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 26L120 21.7C240 17.3 480 8.7 720 13C960 17.3 1200 34.7 1320 43.3L1440 52V74H1320C1200 74 960 74 720 74C480 74 240 74 120 74H0V26Z" 
            fill="currentColor" className="text-gray-50 dark:text-gray-900/50" />
        </svg>
      </div>

      {/* What I Do Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900/50 py-20">
        <div className="container-custom">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">What I Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in creating modern and responsive web experiences with clean code and beautiful interfaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 text-accent-light dark:text-accent-dark">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 74L120 67.7C240 61.3 480 48.7 720 43.3C960 38 1200 40 1320 41L1440 42V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V74Z" 
              fill="currentColor" className="text-white dark:text-gray-800" />
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20">
        <div className="container-custom">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative h-80 rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-90">
                  <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                  <Link to={project.link} className="flex items-center gap-2 text-white font-medium group">
                    <span>View Project</span> 
                    <FiExternalLink className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/projects" className="btn btn-primary flex items-center gap-2">
              View All Projects <FiArrowRight />
            </Link>
          </div>
        </div>
        
        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 1440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 29.1642L60 36.0978C120 43.0314 240 57.0896 360 64.0232C480 71.0478 600 71.0478 720 64.0232C840 57.0896 960 43.0314 1080 36.0978C1200 29.1642 1320 29.1642 1380 29.1642L1440 29.1642V94.0232H1380C1320 94.0232 1200 94.0232 1080 94.0232C960 94.0232 840 94.0232 720 94.0232C600 94.0232 480 94.0232 360 94.0232C240 94.0232 120 94.0232 60 94.0232H0V29.1642Z" 
              fill="currentColor" className="text-gray-50 dark:text-gray-900/50" />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900/50 py-20">
        <div className="container-custom">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I specialize in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-accent-light dark:text-accent-dark">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent-light dark:bg-accent-dark rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Link to="/about" className="btn btn-outline flex items-center gap-2">
              More About Me <FiArrowRight />
            </Link>
          </div>
        </div>
        
        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-20" viewBox="0 0 1440 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 102L48 90.9C96 79.8 192 57.6 288 53C384 48.4 480 61.3 576 68.8C672 76.3 768 78.3 864 71.8C960 65.3 1056 50.3 1152 42.8C1248 35.3 1344 35.3 1392 35.3H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V102Z" 
              fill="currentColor" className="text-white dark:text-gray-800" />
          </svg>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">Technologies I Work With</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              I specialize in frontend development with modern tools and frameworks
            </p>
            
            <div className="flex justify-center flex-wrap gap-8 md:gap-12">
              {["React", "JavaScript", "HTML5", "CSS3", "Node.js", "MySQL"].map((tech, index) => (
                <motion.div 
                  key={tech} 
                  className="flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl md:text-3xl font-bold text-accent-light dark:text-accent-dark">{tech[0]}</span>
                  </div>
                  <span className="font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Wave Background */}
      <section className="relative bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-500 py-20 text-white">
        {/* Wave background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="absolute h-full w-full" viewBox="0 0 800 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 300 Q 150 250 300 300 Q 450 350 600 300 Q 750 250 900 300 L 900 0 L 0 0 L 0 300" 
              fill="white" transform="rotate(180 450 400)">
              <animate attributeName="d" 
                repeatCount="indefinite" 
                dur="15s" 
                attributeType="XML"
                values="
                M 0 300 Q 150 350 300 300 Q 450 250 600 300 Q 750 350 900 300 L 900 0 L 0 0 L 0 300;
                M 0 300 Q 150 250 300 300 Q 450 350 600 300 Q 750 250 900 300 L 900 0 L 0 0 L 0 300;
                M 0 300 Q 150 350 300 300 Q 450 250 600 300 Q 750 350 900 300 L 900 0 L 0 0 L 0 300"
                keyTimes="0;0.5;1">
              </animate>
            </path>
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-10 text-white/90">
              I'm currently available for freelance work. Let's create something amazing together!
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-accent-light dark:text-accent-dark font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 