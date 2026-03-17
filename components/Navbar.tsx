import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onInquiryClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onInquiryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0F1C2E]/95 backdrop-blur-md shadow-lg py-2 md:py-1' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center transition-transform hover:scale-105 z-50">
          <img 
            src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAyMTRfMjYz/MDAxNzcxMDMwMzM3Mzc5.Ew56FSmPQc6Da1HGaIAzzqf2KUeM2UlesZJsoy58fe0g.KHJ2RxyrDVyqlTW7qxLPcyYbuiPxctuvyXZHZohaZk0g.PNG/%ED%99%80%EB%A6%B0%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A1%9C%EA%B3%A0_%EB%88%84%EB%81%BC.png/%25ED%2599%2580%25EB%25A6%25B0%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580%2B%25EB%25A1%259C%25EA%25B3%25A0%2B%25EB%2588%2584%25EB%2581%25BC.png?type=w161" 
            alt="HOLINPAGE Logo" 
            className={`transition-all duration-300 w-auto object-contain ${isScrolled ? 'h-12 md:h-20' : 'h-16 md:h-28'}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-2xl font-bold">
          <Link to="/company" className={`${isActive('/company') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>회사소개</Link>
          <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>포트폴리오</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-[#2F6BFF]' : 'text-slate-400'} hover:text-[#2F6BFF] transition-colors uppercase tracking-widest`}>가격안내</Link>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onInquiryClick}
            className={`hidden md:block bg-[#2F6BFF] text-white rounded-full font-black hover:bg-white hover:text-[#0F1C2E] transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20 ${isScrolled ? 'px-8 py-2 text-lg' : 'px-10 py-4 text-xl'}`}
          >
            문의하기
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0F1C2E] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-3xl font-black px-6">
          <Link to="/company" className={`${isActive('/company') ? 'text-[#2F6BFF]' : 'text-white'} uppercase tracking-widest`}>회사소개</Link>
          <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-[#2F6BFF]' : 'text-white'} uppercase tracking-widest`}>포트폴리오</Link>
          <Link to="/pricing" className={`${isActive('/pricing') ? 'text-[#2F6BFF]' : 'text-white'} uppercase tracking-widest`}>가격안내</Link>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onInquiryClick?.();
            }}
            className="w-full bg-[#2F6BFF] text-white py-6 rounded-2xl shadow-xl"
          >
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;