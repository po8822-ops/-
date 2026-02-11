
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onInquiryClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInquiryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F1C2E]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          HOLIN<span className="text-[#2F6BFF]">PAGE</span>
        </Link>
        <div className="hidden md:flex space-x-10 text-sm font-bold">
          <Link to="/company" className={`${isActive('/company') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>회사소개</Link>
          <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>포트폴리오</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>가격안내</Link>
        </div>
        <button 
          onClick={onInquiryClick}
          className="bg-[#2F6BFF] text-white px-8 py-3 rounded-full text-xs font-black hover:bg-white hover:text-[#0F1C2E] transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
        >
          문의하기
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
