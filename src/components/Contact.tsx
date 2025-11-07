// import { MailIcon, GithubIcon, LinkedinIcon } from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <h2 className="text-4xl font-bold text-center text-primary mb-12">Get In Touch</h2>
      <form className="max-w-3xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md h-32"
        />
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}