import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, X } from "lucide-react";

const projects = [
  {
    title: "To-Do List Web App",
    description: "A clean and functional task management application with features like adding, completing, and deleting tasks. Built with vanilla JavaScript and modern CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "bg-gradient-to-br from-primary/20 to-rose-100/40",
    accent: "bg-primary/30",
    liveDemo: "https://yamunikac.github.io/OIBSIP_HTML_Projects/To-Do%20List.html",
    github: "https://github.com/yamunikac/OIBSIP_HTML_Projects/blob/main/To-Do%20List.html",
    problem: "Managing daily tasks efficiently without losing track of completed and pending items.",
    solution: "Built a simple, intuitive to-do app with add, complete, and delete functionality using vanilla JS.",
    challenges: "Implementing persistent state management and ensuring smooth user interactions without frameworks.",
  },
  {
    title: "Register & Login Page",
    description: "A responsive authentication interface with form validation, smooth animations, and a user-friendly design for seamless user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "bg-gradient-to-br from-lavender/25 to-violet-100/40",
    accent: "bg-lavender/35",
    liveDemo: "https://yamunikac.github.io/OIBSIP_HTML_Projects/Register-Login.html",
    github: "https://github.com/yamunikac/OIBSIP_HTML_Projects/blob/main/Register-Login.html",
    problem: "Creating a secure and visually appealing authentication interface for user onboarding.",
    solution: "Designed a responsive login/register form with client-side validation and smooth transitions.",
    challenges: "Balancing form validation logic with responsive design across different screen sizes.",
  },
  {
    title: "Traditional Health Care Approach",
    description: "A comprehensive website showcasing traditional healthcare methods and natural remedies, featuring a clean UI and informative content.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "bg-gradient-to-br from-accent/25 to-emerald-100/40",
    accent: "bg-accent/35",
    liveDemo: "https://yamunikac.github.io/tradcare/",
    github: "https://github.com/yamunikac/tradcare",
    problem: "Lack of accessible digital resources for traditional healthcare knowledge.",
    solution: "Created an informative website presenting traditional remedies with modern web design.",
    challenges: "Organizing extensive content in a user-friendly manner while maintaining visual appeal.",
  },
  {
    title: "Portfolio Website",
    description: "This very website! A modern, responsive portfolio built with React and Framer Motion, featuring smooth animations and a pastel aesthetic.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "bg-gradient-to-br from-peach/25 to-amber-100/40",
    accent: "bg-peach/35",
    liveDemo: "#home",
    github: "https://github.com/yamunikac",
    problem: "Needed a professional online presence to showcase skills and projects effectively.",
    solution: "Built a modern portfolio with React, featuring animations and a unique pastel design system.",
    challenges: "Creating smooth animations while maintaining performance and accessibility standards.",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  const overlayVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    },
    exit: { 
      opacity: 0, 
      y: 100,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    },
  };

  const handleLiveDemo = (link: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const toggleExpand = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/40 text-secondary-foreground text-sm font-medium mb-4">
              My Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects I've built while learning and growing as a developer. 
              Each project represents a step forward in my coding journey.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                onClick={() => toggleExpand(project.title)}
                className={`group relative p-8 rounded-2xl ${project.color} border border-border/40 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer min-h-[320px]`}
              >
                {/* Normal View */}
                <AnimatePresence mode="wait">
                  {expandedProject !== project.title && (
                    <motion.div
                      key="normal"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col"
                    >
                      {/* Folder Icon */}
                      <div className={`w-12 h-12 rounded-xl ${project.accent} flex items-center justify-center mb-6`}>
                        <Folder className="w-6 h-6 text-foreground/80" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary-foreground transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-foreground/70 border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 mt-auto">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                        <motion.button
                          onClick={(e) => handleLiveDemo(project.liveDemo, e)}
                          className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-25">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-foreground/25" />
                        <div className="absolute top-2 right-8 w-4 h-4 rounded-full border-2 border-foreground/15" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded View - Problem, Solution, Challenges (slides from bottom) */}
                <AnimatePresence>
                  {expandedProject === project.title && (
                    <motion.div
                      key="expanded"
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0 bg-white rounded-2xl p-6 flex flex-col"
                    >
                      {/* Close Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedProject(null);
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                      >
                        <X className="w-4 h-4 text-foreground" />
                      </button>

                      <h3 className="text-xl font-serif font-semibold text-foreground mb-4 pr-10">
                        {project.title}
                      </h3>

                      <div className="space-y-4 flex-1">
                        <div>
                          <h4 className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-1">
                            Problem
                          </h4>
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                            Solution
                          </h4>
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-1">
                            Challenges Faced
                          </h4>
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            {project.challenges}
                          </p>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                        <motion.button
                          onClick={(e) => handleLiveDemo(project.liveDemo, e)}
                          className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div variants={cardVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/yamunikac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground font-medium shadow-soft hover:shadow-card transition-all duration-300 border border-border"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};