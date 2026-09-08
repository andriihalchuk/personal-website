import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Blog from './Blog';
import ParticlesBackground from './ParticlesBackground';

export default function App() {
  // Lift the state so it is shared globally
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <BrowserRouter basename="/personal-website">
      <ParticlesBackground key={isDarkMode ? "dark" : "light"} isDarkMode={isDarkMode} />
      
      <Routes>
        {/* Pass the theme state down to pages as props */}
        <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/Blog" element={<Blog isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}