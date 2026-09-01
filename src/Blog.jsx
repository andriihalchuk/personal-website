import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'General', href: '/#general' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Change top and bottom boundaries of the site
  useEffect(() => {
    document.body.classList.remove('bg-slate-900', 'bg-blue-300');
    
    if (isDarkMode) {
      document.body.classList.add('bg-slate-900');
    } else {
      document.body.classList.add('bg-blue-300');
    }
  }, [isDarkMode]);

  // Reusable class string for navigation buttons
  const navBtnClass = `btn-nav ${
    isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'
  }`;

  const themeBtnClass = `text-4xl rounded-4xl w-12 h-12 flex justify-center items-center transition-colors ease-in-out duration-300 delay-50 cursor-pointer ${
    isDarkMode 
      ? 'hover:text-amber-400 hover:bg-slate-800 text-blue-200' 
      : 'hover:text-violet-950 hover:bg-blue-600 text-blue-950'
  }`;

  // Reusable function for project cards to handle the slight difference in light-mode backgrounds
  const getProjectCardClass = (lightModeBg) =>
    `rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
      isDarkMode ? 'bg-slate-700' : lightModeBg
    }`;  
  return (
    <div className={`min-h-screen min-w-max ${isDarkMode ? 'bg-slate-800' : 'bg-blue-200'}`}>
          
          {/* Navbar */}
          <div
            className={`flex items-center justify-between p-4 gap-6 text-2xl sticky top-0 ${
              isDarkMode ? 'bg-slate-900 text-blue-200' : 'bg-blue-300 text-blue-950'
            }`}
          >
            <div className="font-bold">
              <Link to="/">
                  <img className="h-12 w-12" src="logo.png" alt="logo"/>
              </Link>
            </div>
    
            <div className="flex gap-8 items-center">
              
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
                <a
                  className="btn-socials hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in//"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="btn-socials hover:text-violet-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/"
                >
                  <FaGithub />
                </a>
              </div>
    
              <div className="flex">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={themeBtnClass}
                >
                  {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                </button>
              </div>
    
            </div>
          </div>
          <main
            className={`p-10 flex flex-col items-center justify-center gap-80 text-4xl ${
            isDarkMode ? 'text-blue-200' : 'text-blue-950'
            }`}
        >There is nothing to display yet. Come back later!</main>
    </div>
  );
}