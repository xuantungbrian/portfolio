import "./index.css";
import Footer from "@/components/sections/Footer"
import Projects from "@/components/sections/Projects"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
