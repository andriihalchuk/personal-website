import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdLightMode , MdDarkMode } from "react-icons/md";
import { useState } from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`min-h-max min-w-max ${isDarkMode ? 'bg-slate-800' : 'bg-blue-200'} overscroll-auto`}>
      <div className={`${isDarkMode ? 'bg-slate-900 text-blue-200' : 'bg-blue-300 text-blue-900'} 
        flex items-center justify-between p-4 gap-6 text-2xl sticky top-0`}>
        <div className='font-bold'><img src="/demo logo.jpg" alt="logo"></img></div>
        <div className='flex gap-8 items-center'>
          <div className='flex gap-6'>
            <a className={`btn-nav ${isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'}`} href='#about_me'>About Me</a>
            <a className={`btn-nav ${isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'}`} href='#projects'>Projects</a>
            <a className={`btn-nav ${isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'}`} href='#skills'>  Skills</a>
            <a className={`btn-nav ${isDarkMode ? 'bg-blue-800 hover:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'}`} href='#contact'> Contact</a>
          </div>
          <div className='flex gap-4'>
            <a className='btn-socials hover:text-blue-500' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in//'><FaLinkedin></FaLinkedin></a>
            <a className='btn-socials hover:text-violet-600' target='_blank' rel='noopener noreferrer' href='https://github.com/'><FaGithub></FaGithub></a>
          </div>  
          <div className='flex'>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className=' text-4xl hover:text-amber-400 hover:bg-slate-800 rounded-4xl w-12 h-12 flex justify-center items-center transition-colors ease-in-out duration-300 delay-50 cursor-pointer'>{isDarkMode ? <MdLightMode /> : <MdDarkMode />}</button>
          </div>
        </div>   
      </div>
      <main className={`p-10 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'} flex flex-col items-center justify-center gap-80 text-4xl`}>
        <h1 className='text-5xl'>Welcome to my portfolio</h1>
        <section className='max-w-4xl w-full scroll-mt-24' id='about_me'>
          <h1 className='text-center mb-6 font-bold'>A little about me</h1>
          <p className='leading-relaxed text-center text-3xl'>
            Hey, my name is and I am a first year Computer Science student at the University of .
          </p>
        </section>
        <section className='max-w-4xl w-full scroll-mt-24' id='projects'>
          <h1 className='text-center mb-6 font-bold'>My projects</h1>

        </section>
        <section className='max-w-4xl w-full scroll-mt-24' id='skills'>
          <h1 className='text-center mb-6 font-bold'>My skills</h1>

        </section>
        <section className='max-w-4xl w-full scroll-mt-24' id='contact'>
          <h1 className='text-center mb-6 font-bold'>Contact me</h1>

        </section>
      </main>
    </div>
  );
}