import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Blog from './Blog';

export default function App() {
  return (
    <BrowserRouter basename="/personal-website">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}