import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useLocation, Link } from 'react-router-dom';

// Extracted navigation data to keep the JSX clean
const NAV_LINKS = [
  { label: 'General', href: '#general' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Home({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation(); // <-- Get the current URL data

  useEffect(() => {
    if (location.hash) {
      // Removes the '#' so we just have the ID name (e.g., 'about_me')
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Scrolls down to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


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
    <div className="min-h-screen w-full relative z-10">

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
            <Link to="/Blog" className={navBtnClass}>
              Blog
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
              to="/Blog"
              className={navBtnClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            {/* Mobile Socials */}
            <div className="flex gap-8 mt-4 text-4xl">
              <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrii-halchuk/"><FaLinkedin /></a>
              <a className="hover:text-violet-600" target="_blank" rel="noopener noreferrer" href="https://github.com/andriihalchuk"><FaGithub /></a>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main
        className={`p-10 flex flex-col items-center justify-center gap-30 text-4xl ${isDarkMode ? 'text-blue-200' : 'text-blue-950'
          }`}
      >
        <section className="max-w-4xl w-full scroll-mt-24" id="general">
          <h1 className="text-center mb-6 font-bold">Andrii Halchuk</h1>
          <p className="leading-relaxed text-center text-3xl">
            <b>Education:</b> Computer Science @ University of Warwick '28
          </p>
          <p className="leading-relaxed text-center text-3xl">
            <b>Interests:</b> Backend / Fullstack Development
          </p>
          <div className="flex justify-center mt-8">
            <a 
              className={`px-4 py-2 text-3xl font-bold rounded-xl shadow-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`} 
              target="_blank" 
              rel="noopener noreferrer" 
              href="personal-website/public/Andrii_Halchuk_CV.pdf"
            >
              My Resume
            </a>
          </div>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="skills">
          <h1 className="text-center mb-6 font-bold">Technical skills</h1>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="projects">
          <h1 className="text-center mb-6 font-bold">Projects</h1>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2">

            <div className={getProjectCardClass('bg-blue-400')}>
              {/* Added p-3 for the gap, and rounded-2xl so the image corners match the card */}
              <img src="/personal-website/overclock.png" alt="Overclock Project" className="w-full object-cover p-3 rounded-2xl" />

              <div className="p-6 pt-2 flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Overclock</h3>
                <p className="text-2xl">An app that eliminates distractions and helps to lock in</p>
                <a href="#" className="text-xl underline hover:text-blue-500 transition-colors">
                  Link to github
                </a>
              </div>
            </div>
            <div className={getProjectCardClass('bg-blue-300')}></div>
          </div>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="contact">
          <h1 className="text-center mb-6 font-bold">Contact</h1>
        </section>

      </main>
    </div>
  );
}
