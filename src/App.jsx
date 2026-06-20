import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

// Extracted navigation data to keep the JSX clean
const NAV_LINKS = [
  { label: 'About Me', href: '#about_me' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
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
    <div className={`min-h-max min-w-max ${isDarkMode ? 'bg-slate-800' : 'bg-blue-200'}`}>
      
      {/* Navbar */}
      <div
        className={`flex items-center justify-between p-4 gap-6 text-2xl sticky top-0 ${
          isDarkMode ? 'bg-slate-900 text-blue-200' : 'bg-blue-300 text-blue-950'
        }`}
      >
        <div className="font-bold">
          <a href="#welcome">
            <img className="h-12 w-12" src="logo.png" alt="logo"/>
          </a>
        </div>

        <div className="flex gap-8 items-center">
          
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.label} className={navBtnClass} href={link.href}>
                {link.label}
              </a>
            ))}
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

      {/* Main Content */}
      <main
        className={`p-10 flex flex-col items-center justify-center gap-80 text-4xl ${
          isDarkMode ? 'text-blue-200' : 'text-blue-950'
        }`}
      >
        <section className="text-5xl scroll-mt-24" id="welcome">Welcome to my portfolio</section>

        <section className="max-w-4xl w-full scroll-mt-24" id="about_me">
          <h1 className="text-center mb-6 font-bold">A little about me</h1>
          <p className="leading-relaxed text-center text-3xl">
            Hey, my name is and I am a first year Computer Science student at the University of .
          </p>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="projects">
          <h1 className="text-center mb-6 font-bold">My projects</h1>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
            
            <div className={getProjectCardClass('bg-blue-400')}>
              {/* Added p-3 for the gap, and rounded-2xl so the image corners match the card */}
              <img 
                src="overclock.png" 
                alt="Overclock Project" 
                className="w-full object-cover p-3 rounded-2xl" 
              />
              
              <div className="p-6 pt-2 flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Overclock</h3>
                <p className="text-2xl">An app that eliminates distractions and helps to lock in</p>
                <a href="#" className="text-xl underline hover:text-blue-500 transition-colors">
                  Link to github
                </a>
              </div>
            </div>
            
            <div className={getProjectCardClass('bg-blue-300')}></div>
            <div className={getProjectCardClass('bg-blue-300')}></div>

          </div>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="skills">
          <h1 className="text-center mb-6 font-bold">My skills</h1>
        </section>

        <section className="max-w-4xl w-full scroll-mt-24" id="contact">
          <h1 className="text-center mb-6 font-bold">Contact me</h1>
        </section>
        
      </main>
    </div>
  );
}