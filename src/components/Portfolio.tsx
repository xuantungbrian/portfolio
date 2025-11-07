"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card" // TODO: Need fix paths
import { Badge } from "./ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: "Firmware Testing Framework",
      description:
        "Automated testing suite for embedded systems with real-time monitoring and comprehensive reporting capabilities.",
      tech: ["Python", "C++", "Jenkins", "Docker"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration, inventory management, and responsive design.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "IoT Device Manager",
      description: "Cloud-based dashboard for managing and monitoring IoT devices with real-time data visualization.",
      tech: ["Next.js", "TypeScript", "AWS", "MQTT"],
      link: "#",
    },
    {
      title: "API Gateway Service",
      description:
        "Microservices architecture with rate limiting, authentication, and comprehensive API documentation.",
      tech: ["Go", "Redis", "Kubernetes", "GraphQL"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Xuan Tung
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Software Engineer specializing in firmware testing, embedded systems, and modern web development. Building
            reliable solutions that bridge hardware and software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-muted/30">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="border-primary/20 shadow-xl backdrop-blur-sm bg-card/80">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a passionate software engineer with expertise in{" "}
                  <span className="text-primary font-semibold">firmware testing</span>,
                  <span className="text-secondary font-semibold"> embedded systems</span>, and
                  <span className="text-accent font-semibold"> full-stack web development</span>. My work focuses on
                  creating robust, scalable solutions that ensure quality and reliability across hardware and software
                  platforms.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  With a strong foundation in both low-level system programming and modern web technologies, I bridge
                  the gap between hardware constraints and user-friendly interfaces. I'm experienced in automated
                  testing frameworks, CI/CD pipelines, and building responsive web applications.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or diving deep into technical documentation to stay at the forefront of software engineering
                  practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                <Card className="h-full border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-card/80 group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
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
              <a href="mailto:xuantung@example.com">
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
              <a href="https://github.com/xuantung" target="_blank" rel="noopener noreferrer">
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
              <a href="https://linkedin.com/in/xuantung" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Xuan Tung. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
