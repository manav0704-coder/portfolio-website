import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiExternalLink, FiGithub } from 'react-icons/fi';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projectVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Sample projects data
const projectsData = [
  {
    id: 1,
    title: "All Maharashtra Taekwondo Association",
    description: "Developing a comprehensive platform for the All Maharashtra Taekwondo Association using React.js, Tailwind CSS, Node.js, and MongoDB, featuring event management and member registration functionality.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/manav0704-coder/amta-website",
    featured: true,
    inProgress: true
  },
  {
    id: 2,
    title: "Photography Website",
    description: "Developed a modern photography portfolio website with gallery and hover animations optimized for multiple screen sizes.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kd-photography.netlify.app/",
    githubUrl: "https://github.com/manav0704-coder/photography/tree/main/photography-order",
    featured: false
  },
  {
    id: 3,
    title: "Echo Music Player",
    description: "Developed a music streaming platform similar to Spotify with a sleek UI, playlist management, and media playback controls using REST API.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "",
    githubUrl: "https://github.com/manav0704-coder/ECHO-music-player",
    featured: true,
    inProgress: true
  },
  {
    id: 4,
    title: "Bookstore Website",
    description: "A dynamic web app that allows users to explore and manage books online with category filters and detailed book views.",
    image: "https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    inProgress: true
  },
  {
    id: 5,
    title: "Cars Landing Page",
    description: "Designed and developed a landing page for showcasing luxury cars with smooth scrolling, animations, and responsive layout.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lx-car-landing.netlify.app/",
    githubUrl: "https://github.com/manav0704-coder/luxury-cars-landing-page/tree/main/Landing%20page",
    featured: true
  },
  {
    id: 6,
    title: "Attendance System",
    description: "Created an interactive attendance tracking application with data storage, filter functionality, and status toggling.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "JSON Server"],
    liveUrl: "",
    githubUrl: "https://github.com/manav0704-coder/Attendance-system",
    featured: false,
    inProgress: true
  },
  {
    id: 7,
    title: "Library Management System",
    description: "Developed a full-stack library management system enabling book issuance, return tracking, and admin panel features.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React.js", "Node.js", "MySQL"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    inProgress: true
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique technologies for filter
  const allTechnologies = ["All", ...new Set(
    projectsData.flatMap(project => project.technologies)
  )];

  // Filter projects based on selected technology
  const handleFilterClick = (tech) => {
    setActiveFilter(tech);
    
    if (tech === "All") {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        project.technologies.includes(tech)
      );
      setProjects(filtered);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A curated selection of my projects showcasing my skills and experiences.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FiFilter className="mr-2 text-accent-light dark:text-accent-dark" />
            <h2 className="text-lg font-medium">Filter by technology</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => handleFilterClick(tech)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === tech
                    ? 'bg-accent-light dark:bg-accent-dark text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects match the selected filter.
            </p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {projects.map(project => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent-light dark:bg-accent-dark text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  {project.inProgress && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      In Progress
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="bg-secondary-light dark:bg-secondary-dark text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-accent-light hover:underline dark:text-accent-dark"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    ) : project.inProgress && (
                      <span className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <FiExternalLink /> Coming Soon
                      </span>
                    )}
                    
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-accent-light hover:underline dark:text-accent-dark"
                      >
                        <FiGithub /> Source Code
                      </a>
                    ) : project.inProgress && (
                      <span className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <FiGithub /> In Development
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects; 