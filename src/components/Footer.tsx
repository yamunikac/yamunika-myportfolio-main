import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/yamunikac", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yamunika/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:chinthapantiyamunika1229@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-6 bg-card border-t border-border/60">
      <div className="max-w-md mx-auto px-6">
        <div className="flex flex-col items-center gap-3">
          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Chintapanti Yamunika. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};