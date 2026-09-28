import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResearchIndex from './pages/ResearchIndex';
import ResearchDetail from './pages/ResearchDetail';

// Helper component to scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#302B2B] flex flex-col font-sans selection:bg-[#F7E3E3] selection:text-[#A94444]">
      <ScrollToTop />
      
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Routing */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchIndex />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
