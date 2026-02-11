
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';
import { Portfolio } from './types';
import { INITIAL_PORTFOLIOS, BRAND_LOGOS } from './constants';

const App: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(() => {
    try {
      const saved = localStorage.getItem('holeen_portfolios');
      return saved ? JSON.parse(saved) : INITIAL_PORTFOLIOS;
    } catch (e) {
      console.warn("Failed to load portfolios from localStorage", e);
      return INITIAL_PORTFOLIOS;
    }
  });

  const [brandLogos, setBrandLogos] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('holeen_brand_logos');
      return saved ? JSON.parse(saved) : BRAND_LOGOS;
    } catch (e) {
      console.warn("Failed to load brand logos from localStorage", e);
      return BRAND_LOGOS;
    }
  });

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('holeen_portfolios', JSON.stringify(portfolios));
    } catch (e) {
      console.error("Failed to save portfolios to localStorage", e);
    }
  }, [portfolios]);

  useEffect(() => {
    try {
      localStorage.setItem('holeen_brand_logos', JSON.stringify(brandLogos));
    } catch (e) {
      console.error("Failed to save brand logos to localStorage", e);
    }
  }, [brandLogos]);

  const openInquiry = () => setIsInquiryOpen(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0F1C2E]">
        <Routes>
          <Route path="/" element={<Home portfolios={portfolios} brandLogos={brandLogos} onInquiryClick={openInquiry} />} />
          <Route path="/company" element={<Company onInquiryClick={openInquiry} />} />
          <Route path="/portfolio" element={<PortfolioPage portfolios={portfolios} onInquiryClick={openInquiry} />} />
          <Route path="/pricing" element={<PricingPage onInquiryClick={openInquiry} />} />
          <Route path="/admin" element={<Admin portfolios={portfolios} setPortfolios={setPortfolios} brandLogos={brandLogos} setBrandLogos={setBrandLogos} />} />
        </Routes>
        <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
