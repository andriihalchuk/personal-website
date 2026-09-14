import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useLocation, Link } from 'react-router-dom';

// Extracted navigation data to keep the JSX clean
const NAV_LINKS = [
  { label: 'General', href: '#general' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const PROJECTS = [
  {
    id: 1,
    title: "Overclock",
    description: "An app that eliminates distractions and helps to lock in",
    img: "/personal-website/overclock.png",
    link: "#"
  },
  {
    id: 2,
    title: "LambdaGPT",
    description: "A chatbot.",
    img: "/personal-website/lgpt.png",
    link: "#"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Another awesome project.",
    img: "https://via.placeholder.com/400x200",
    link: "#"
  }
];

const SKILLS_DATA = [
  {
    category: "Languages",
    items: ["Python", "Java", "Haskell", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "Chart.js", "Jinja2", "jQuery"]
  },
  {
    category: "Tools & Software",
    items: ["Git", "Linux (CLI)", "SQLite", "Vite", "PyInstaller", "VS Code", "Replit"]
  }
];

export default function Home({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation(); // Get the current URL data

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;
  const maxIndex = PROJECTS.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

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
              href="Andrii_Halchuk_CV.pdf"
            >
              My Resume
            </a>
          </div>
        </section>

        <section className="max-w-6xl w-full scroll-mt-24 px-4" id="skills">
          <h1 className="text-center mb-12 font-bold">Technical Skills</h1>
          
          <div className="flex flex-col gap-6">
            {SKILLS_DATA.map((skillGroup, index) => (
              <div 
                key={index} 
                // rounded-lg matches project cards
                className={`p-4 rounded-lg shadow-sm border grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 md:gap-12 items-center ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-slate-600' 
                    : 'bg-blue-50/60 border-blue-200'
                }`}
              >
                {/* Left side label */}
                <h3 className="text-2xl font-bold md:text-right">
                  {skillGroup.category}:
                </h3>
                
                {/* Right side skills list */}
                <p className="text-2xl leading-relaxed">
                  {skillGroup.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl w-full scroll-mt-24 px-24 relative" id="projects">
          <h1 className="text-center mb-6 font-bold">Projects</h1>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden w-full py-6 -my-6 px-4 -mx-4">
            
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-12"
              style={{ transform: `translateX(calc(-${currentIndex} * (440px + 3rem)))` }}
            >
              {PROJECTS.map((project) => (
                // Fixed project card dimentions
                <div key={project.id} className="w-[440px] h-[480px] flex-shrink-0">
                  <div className={`h-full flex flex-col rounded-lg shadow-lg hover:scale-105 transition-transform ${isDarkMode ? 'bg-slate-700' : 'bg-blue-400'}`}>
                    
                    {/* Fixed image height to keep them uniform */}
                    <img 
                      src={project.img} 
                      alt={`${project.title} Project`} 
                      className="w-full object-scale-down p-3 rounded-3xl h-56 shrink-0" 
                    />
                    
                    <div className="p-6 pt-2 flex flex-col gap-4 flex-grow">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <p className="text-2xl line-clamp-3">{project.description}</p>
                      
                      {/* mt-auto pushes the link to the very bottom*/}
                      <a href={project.link} className="text-xl underline hover:text-blue-500 transition-colors mt-auto">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional left button */}
          {currentIndex > 0 && (
            <button 
              onClick={prevSlide} 
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-4 text-3xl rounded-full shadow-lg z-10 transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              <FaChevronLeft />
            </button>
          )}
          
          {/* Conditional right button */}
          {currentIndex < maxIndex && (
            <button 
              onClick={nextSlide} 
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 text-3xl rounded-full shadow-lg z-10 transition-colors ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            >
              <FaChevronRight />
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
