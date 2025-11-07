import { motion } from "framer-motion";
import { MailIcon, ArrowRightIcon } from "@heroicons/react/outline";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-lg">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm <span className="text-accent">Xuan Tung</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl max-w-3xl"
      >
        I specialize in firmware testing, embedded systems, and modern web
        development. Let's build something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-accent text-white rounded-md shadow-md hover:bg-blue-500 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}