"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeInUp, staggerContainer } from "@/lib/motionVariant"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg gap-2"
              asChild
            >
              <a href="mailto:xuantung.brian@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 gap-2 bg-transparent"
              asChild
            >
              <a href="https://github.com/xuantungbrian" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-secondary/50 hover:bg-secondary/10 gap-2 bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/tungxuanluu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
  );
}