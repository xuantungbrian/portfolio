import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Firmware Testing Framework",
      description: "Automated testing suite for embedded systems with real-time monitoring and reporting.",
      tech: ["Python", "C++", "Jenkins", "Docker"],
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack web app with payment integration, inventory management, and responsive design.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      id: 3,
      title: "IoT Device Manager",
      description: "Cloud-based dashboard for managing IoT devices with real-time data visualization.",
      tech: ["Next.js", "TypeScript", "AWS", "MQTT"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-primary mb-12"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: project.id * 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-4 inline-block text-primary hover:underline"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}