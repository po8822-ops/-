
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Company from './pages/Company';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';
import { Portfolio, BrandLogo } from './types';
import { INITIAL_PORTFOLIOS, BRAND_LOGOS } from './constants';
import { db, auth, handleFirestoreError, OperationType } from './src/firebase';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const App: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(INITIAL_PORTFOLIOS);
  const [brandLogos, setBrandLogos] = useState<BrandLogo[]>(BRAND_LOGOS.map((url, i) => ({ id: String(i), url })));
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u: any) => {
      setUser(u);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAuthReady) return;

    const portfoliosQuery = query(collection(db, 'portfolios'), orderBy('createdAt', 'desc'));
    const unsubscribePortfolios = onSnapshot(portfoliosQuery, (snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() } as Portfolio));
      setPortfolios(data);
    }, (error: any) => {
      handleFirestoreError(error, OperationType.GET, 'portfolios');
    });

    const logosQuery = query(collection(db, 'brandLogos'), orderBy('createdAt', 'asc'));
    const unsubscribeLogos = onSnapshot(logosQuery, (snapshot: any) => {
      const data = snapshot.docs.map((doc: any) => ({ id: doc.id, url: doc.data().url } as BrandLogo));
      setBrandLogos(data);
    }, (error: any) => {
      handleFirestoreError(error, OperationType.GET, 'brandLogos');
    });

    return () => {
      unsubscribePortfolios();
      unsubscribeLogos();
    };
  }, [isAuthReady]);

  const openInquiry = () => setIsInquiryOpen(true);

  return (
    <Router>
      <Toaster position="top-center" richColors />
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
