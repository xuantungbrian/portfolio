import { Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="max-w-5xl mx-auto px-6 py-12 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Xuan Tung Luu</h1>
        <p className="text-sm text-gray-600">Computer Engineering • Graduating Aug 2026 • Firmware Test & Web Dev</p>
      </div>
      <nav className="flex gap-3 items-center">
        <a href="#projects" className="text-sm hover:underline">Projects</a>
        <a href="#experience" className="text-sm hover:underline">Experience</a>
        <a href="#contact" className="text-sm hover:underline">Contact</a>
        <a href="/resume.pdf" className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-100">
          <Download size={16} /> Resume
        </a>
      </nav>
    </header>
  );
}