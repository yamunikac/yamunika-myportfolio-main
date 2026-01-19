import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const highlights = [
    { 
      icon: GraduationCap, 
      label: "CSE Student", 
      color: "bg-primary/25",
      link: "https://gisteb.com/StudentLogin/Student/StudentInformation.aspx"
    },
    { 
      icon: Code, 
      label: "Aspiring Developer", 
      color: "bg-lavender/40",
      link: "https://github.com/yamunikac"
    },
    { 
      icon: MapPin, 
      label: "Andhra Pradesh, India", 
      color: "bg-accent/35",
      link: "https://www.google.com/maps/place/Nellore,+Andhra+Pradesh,+India"
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary-foreground text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Getting to Know Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-square max-w-sm mx-auto">
                {/* Background decorations */}
                <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-primary/15" />
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-accent/25" />
                
                {/* Main image container */}
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-card to-muted overflow-hidden shadow-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-primary/25 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-5xl font-serif font-semibold text-primary-foreground">CY</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Chintapanti Yamunika</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-serif font-medium text-foreground">
                Hello! I'm Chintapanti Yamunika 👋
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A passionate Computer Science Engineering student with a strong interest 
                in software development and problem-solving. I enjoy building responsive 
                web applications and translating ideas into clean, maintainable code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Consistency and discipline guide the way I work, helping me stay focused 
                and move forward with purpose.
              </p>

              {/* Highlights - Clickable with equal widths */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {highlights.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl ${item.color} cursor-pointer hover:scale-105 transition-transform duration-200 text-center`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 text-foreground/80" />
                    <span className="text-xs font-medium text-foreground/90 leading-tight">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};