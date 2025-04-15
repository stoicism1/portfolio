import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-1 py-2 flex items-center justify-between">
        {/* Logo & Subtitle */}
        <div className="flex items-start gap-x-3">
          {/* Gradient LR Badge */}
          <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black/40 shadow-inner">
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              LR
            </span>
          </div>

          {/* Name + Subtitle */}
          <div className="flex flex-col leading-tight">
            <a href="#home" className="font-mono text-lg font-bold text-white">
              LakshmiReddy Sanikommu
            </a>
            <span className="text-xs text-gray-400">
              Senior Java Full Stack Developer
            </span>
          </div>
        </div>

        {/* Hamburger (Mobile Only) */}
        <div
          className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-5 text-sm">
          {["home", "skills", "experience", "education", "projects", "resume", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-300 hover:text-amber-300 transition duration-200 relative group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
