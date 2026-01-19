import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, Linkedin, Github, Download } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  const handleResumeClick = () => {
    toast.info("Resume will be updated soon!");
  };

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-peach/40 text-foreground text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Let's Connect!
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, and conversations. 
              Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:chinthapantiyamunika1229@gmail.com"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-foreground/80" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">Email Me</h3>
              <p className="text-muted-foreground text-sm">
                Drop me an email for any inquiries
              </p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/yamunika/"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/25 flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-7 h-7 text-foreground/80" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">LinkedIn Profile</h3>
              <p className="text-muted-foreground text-sm">
                Connect with me professionally
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/yamunikac"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 text-center cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/40 flex items-center justify-center mx-auto mb-4">
                <Github className="w-7 h-7 text-foreground/80" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">GitHub Profile</h3>
              <p className="text-muted-foreground text-sm">
                Check out my code repositories
              </p>
            </motion.a>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 md:p-12 rounded-3xl gradient-accent shadow-card"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              Actively Seeking Internship Opportunities
            </h3>
            <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
              I'm a CSE student eager to gain hands-on industry experience. I'm open to 
              internship roles where I can contribute, learn, and grow as a developer. 
              Let's connect and build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:chinthapantiyamunika1229@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-medium shadow-soft hover:shadow-card transition-all duration-300 border border-border"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send a Message
              </motion.a>
              <motion.button
                onClick={handleResumeClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium shadow-card hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};