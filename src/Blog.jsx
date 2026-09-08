import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'General', href: '/#general' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export default function Blog({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reusable class string for navigation buttons
  const navBtnClass = `btn-nav ${isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'
    }`;

  const themeBtnClass = `text-4xl rounded-4xl w-12 h-12 flex justify-center items-center transition-colors ease-in-out duration-300 delay-50 cursor-pointer ${isDarkMode
    ? 'hover:text-amber-400 hover:bg-slate-800 text-blue-200'
    : 'hover:text-violet-950 hover:bg-blue-600 text-blue-950'
    }`;

  // Reusable function for project cards to handle the slight difference in light-mode backgrounds
  const getProjectCardClass = (lightModeBg) =>
    `rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${isDarkMode ? 'bg-slate-700' : lightModeBg
    }`;
  return (

    <div className={`min-h-screen w-full relative z-10`}>

      {/* Navbar */}
      <div
        className={`flex items-center justify-between p-4 gap-6 text-2xl sticky top-0 z-50 ${isDarkMode ? 'bg-slate-900 text-blue-200' : 'bg-blue-300 text-blue-950'
          }`}
      >
        <div className="font-bold">
          <Link to="/">
            <img className="h-12 w-12" src="/personal-website/logo.png" alt="logo" />
          </Link>
        </div>

        {/* --- Desktop menu --- */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} className={navBtnClass} to={link.href}>
                {link.label}
              </Link>
            ))}
            <Link to="/" className={navBtnClass}>
              Home
            </Link>
          </div>

          <div className="flex gap-4">
            <a className="btn-socials hover:text-blue-500" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrii-halchuk/"><FaLinkedin /></a>
            <a className="btn-socials hover:text-violet-600" target="_blank" rel="noopener noreferrer" href="https://github.com/andriihalchuk"><FaGithub /></a>
          </div>

          <div className="flex">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={themeBtnClass}>
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>

        {/* --- Mobile menu button --- */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className={themeBtnClass}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl hover:text-blue-500 transition-colors p-2"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* --- Mobile dropdown menu --- */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full flex flex-col items-center gap-6 py-8 border-t border-slate-700 shadow-xl md:hidden ${isDarkMode ? 'bg-slate-900' : 'bg-blue-300'
            }`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className={navBtnClass}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/"
              className={navBtnClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="flex gap-8 mt-4 text-4xl">
              <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrii-halchuk/"><FaLinkedin /></a>
              <a className="hover:text-violet-600" target="_blank" rel="noopener noreferrer" href="https://github.com/andriihalchuk"><FaGithub /></a>
            </div>
          </div>
        )}
      </div>

      <main
        className={`p-10 flex flex-col items-center justify-center gap-80 text-4xl ${isDarkMode ? 'text-blue-200' : 'text-blue-950'
          }`}
      >
        There is nothing to display yet. Come back later!
      </main>
    </div>
  );
}