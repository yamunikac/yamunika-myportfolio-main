import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, GitBranch, Brain, Database, Palette } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive and interactive web applications",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    color: "bg-primary/20",
    iconBg: "bg-primary/30",
  },
  {
    icon: Code2,
    title: "Programming",
    description: "Writing clean, efficient code in multiple languages",
    technologies: ["Python", "Java", "C Basics"],
    color: "bg-lavender/25",
    iconBg: "bg-lavender/35",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    description: "Version control and collaborative development",
    technologies: ["Git", "GitHub", "Version Control"],
    color: "bg-amber-100/60",
    iconBg: "bg-yellow-200/50",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Analytical thinking and algorithmic approaches",
    technologies: ["DSA Fundamentals", "Logic Building"],
    color: "bg-sky-100/60",
    iconBg: "bg-sky-200/50",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Understanding data storage and management",
    technologies: ["SQL Basics", "Data Modeling"],
    color: "bg-accent/25",
    iconBg: "bg-accent/35",
  },
  {
    icon: Palette,
    title: "UI/UX Basics",
    description: "Creating user-friendly and aesthetic interfaces",
    technologies: ["Design Thinking", "Responsive Design"],
    color: "bg-gradient-to-br from-orange-200/70 to-rose-200/60",
    iconBg: "bg-orange-300/50",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Technical Expertise & Learning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of technical skills and creative problem-solving abilities 
              that I'm continuously expanding through learning and practice.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative group p-6 rounded-2xl ${skill.color} border border-border/40 shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl" />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl ${skill.iconBg} flex items-center justify-center mb-5`}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <skill.icon className="w-7 h-7 text-foreground/80" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-foreground/80 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};