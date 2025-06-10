import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiVideo, FiBook } from 'react-icons/fi';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Updated experience data with real information
const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Codsoft",
    location: "Pune, India",
    duration: "May 1, 2024 - June 1, 2024",
    description: "Worked as a frontend developer intern at Codsoft, focusing on building responsive web applications and landing pages. Utilized modern web technologies to deliver high-quality user interfaces.",
    achievements: [
      "Developed a responsive luxury car landing page showcasing various vehicles with interactive elements",
      "Implemented modern UI patterns resulting in visually appealing interfaces",
      "Collaborated with senior developers to optimize website performance and accessibility"
    ],
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: <FiBriefcase size={24} className="text-accent-light dark:text-accent-dark" />
  },
  {
    id: 2,
    title: "UI/UX Design Learning",
    company: "Self-Learning through YouTube",
    location: "Online",
    duration: "January 1, 2024 - March 1, 2024",
    description: "Dedicated self-learning journey focused on UI/UX design principles and tools, primarily through structured YouTube courses on Figma and design fundamentals.",
    achievements: [
      "Mastered Figma for creating wireframes, prototypes, and interactive design systems",
      "Studied user experience principles and applied them to personal portfolio projects",
      "Created design mockups that were later implemented into functional web interfaces"
    ],
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping"],
    icon: <FiVideo size={24} className="text-accent-light dark:text-accent-dark" />
  },
  {
    id: 3,
    title: "Web Development",
    company: "BBA in Computer Applications",
    location: "Pune, India",
    duration: "August 5, 2023 - December 1, 2023",
    description: "Learning comprehensive web development through academic coursework while pursuing a Bachelor of Business Administration in Computer Applications. Focused on both frontend and backend development technologies.",
    achievements: [
      "Developed a fully functional e-commerce platform with responsive design for course project",
      "Created KD's Photography website as first freelance project during academic studies",
      "Applied classroom knowledge to build practical web applications with database integration"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    icon: <FiBook size={24} className="text-accent-light dark:text-accent-dark" />
  }
];

const Experience = () => {
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
          <h1 className="text-4xl font-bold mb-4">My Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A summary of my professional journey, academic pursuits, and self-learning efforts.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="relative flex items-start md:justify-center">
              {/* Timeline Icon */}
              <div className="absolute left-0 md:left-1/2 ml-2 md:-ml-6 mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-900 border-4 border-accent-light dark:border-accent-dark">
                {experience.icon}
              </div>

              {/* Timeline Content */}
              <div className={`ml-20 md:ml-0 md:w-5xl ${
                index % 2 === 0 ? 'md:mr-[calc(50%+2rem)] md:pr-8' : 'md:ml-[calc(50%+2rem)] md:pl-8'
              }`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <FiBriefcase className="mr-2 text-gray-500" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <FiMapPin className="mr-2 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">{experience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">{experience.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">
                      Key Achievements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-secondary-light dark:bg-secondary-dark text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience; 