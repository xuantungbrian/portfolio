"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/motionVariant"

export default function About() {
  return (
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
                  I'm a passionate Software Engineer with experience in software development, test automation, 
                  and modern web technologies. My focus is on creating robust, scalable, and maintainable software that 
                  ensures reliability and performance across different environments.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  With a strong foundation in web development, quality assurance, and CI/CD pipelines, 
                  I strive to deliver clean, efficient code and continuously improve system quality through automation and thoughtful design.
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
  );
}