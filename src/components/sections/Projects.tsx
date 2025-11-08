"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/lib/motionVariant"

export default function Projects() {
  const projects = [
    {
      title: "Distributed Key-Value Store (Private)",
      description:
        "Engineered a fault-tolerant, high-availability key-value store via consistent hashing, data replication (factor=4), and zero-downtime operation.",
      tech: ["Java", "JUnit", "Consistent Hashing", "Data Replication"],
      details: [
        "Implemented intelligent failover and node recovery logic.",
        "Designed and executed chaos testing across 30-node cluster simulations.",
      ],
      link: "#",
    },
    {
      title: "OS161 Kernel Implementation",
      description:
        "Built core Operating System primitives, system calls, and synchronization mechanisms for process and memory management within the OS161 environment.",
      tech: ["C", "C++", "MIPS Assembly", "OS Internals"],
      details: [
        "Implemented OS synchronization primitives (locks, semaphores) and solved synchronization challenges.",
        "Enabled key system calls (fork, execv, waitpid, open, read, write) for file and process management.",
        "Designed efficient structures for process tracking, memory management, and file synchronization.",
      ],
      link: "https://github.com/xuantungbrian/Operating-systems",
    },
    {
      title: "Simple RISC Machine Processor",
      description:
        "Designed and implemented a functional custom Reduced Instruction Set Computer (RISC) machine using state machine logic for sequential instruction processing.",
      tech: ["Verilog", "HDL", "State Machines", "MIPS Architecture"],
      details: [
        "Created memory components capable of loading and storing data/instructions.",
        "Designed state machines to fetch assembly instructions and perform arithmetic/logical operations.",
        "Led team, designed the system architecture, and managed progress.",
      ],
      link: "https://github.com/xuantungbrian/Computing-systems",
    },
    {
      title: "Artist's Time Vault Web Service (Private)",
      description:
        "Built a secure, full-stack web service for artists to store and organize media (photos, music) in a directory structure, creating an 'Easter Eggs' fan experience.",
      tech: ["React", "PostgreSQL", "GraphQL", "NestJS"],
      details: [
        "Implemented robust directory structure and secure storage mechanisms.",
        "Automated test process to ensure extensive code coverage and optimal user experience.",
      ],
      link: "#",
    },
    // {
    //   title: "Linux Shell Implementation",
    //   description:
    //     "Developed a custom Linux shell capable of executing programs and seamlessly managing background and foreground jobs using Linux commands.",
    //   tech: ["C", "Linux System Calls", "Signal Handling"],
    //   details: [
    //     "Implemented five signal handlers to manage child processes and keyboard signals effectively.",
    //   ],
    //   link: "#",
    // },
    // {
    //   title: "Messaging System with Toxic Detection",
    //   description:
    //     "Developed a group messaging application integrated with advanced AI models for real-time toxic content detection and automated user moderation.",
    //   tech: ["JavaScript", "MongoDB", "ChatGPT API", "Perspective AI"],
    //   details: [
    //     "Integrated with ChatGPT and Perspective AI for toxic detection and user banning.",
    //   ],
    //   link: "#",
    // },
    // {
    //   title: "Image Processing & Quantization",
    //   description:
    //     "Applied computer vision techniques (PCA) to identify cars (outliers) in highway images and used K-Means clustering for efficient image compression.",
    //   tech: ["Python", "PCA", "K-Means Clustering", "Image Processing"],
    //   details: [
    //     "Implemented robust PCA to capture common features and identify objects via background subtraction.",
    //     "Applied K-Means clustering for image compression while preserving key visual details.",
    //   ],
    //   link: "#",
    // },
    // {
    //   title: "Simple iPod / FPGA Music Player",
    //   description:
    //     "Programmed an FPGA using HDL to create a functional music player with controls (restart, stop, forward) and visual volume feedback.",
    //   tech: ["SystemVerilog", "FPGA", "HDL", "State Machines"],
    //   details: [
    //     "Used state machines and clock dividers to read data from FLASH memory at 44kHz.",
    //     "Controlled a Picoblaze embedded microprocessor to display volume on LEDs.",
    //   ],
    //   link: "#",
    // },
    // {
    //   title: "Travel Journal & Advisory App",
    //   description:
    //     "Designed an Android app to visualize travel history with map pins and integrate location-based recommendations and social features.",
    //   tech: ["Kotlin", "Express.js", "PostgreSQL", "Firebase"],
    //   details: [
    //     "Integrated location-based recommendations, Firebase real-time chat, and Google Auth login.",
    //     "Designed recommendation logic using user activity and collaborative filtering principles.",
    //   ],
    //   link: "#",
    // },
  ];

  return (
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
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
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
  );
}