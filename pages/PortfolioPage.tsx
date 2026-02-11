
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Portfolio } from '../types';

interface PortfolioPageProps {
  portfolios: Portfolio[];
  onInquiryClick: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ portfolios, onInquiryClick }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0F1C2E] text-white min-h-screen">
      <Navbar onInquiryClick={onInquiryClick} />
      
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Portfolio</h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
            업종과 품목을 가리지 않는 홀린만의 압도적 결과물을 확인하세요. (마우스 오버 시 상세 내용을 볼 수 있습니다)
          </p>
        </div>
      </section>

      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolios.map((item) => (
              <a 
                key={item.id} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="scroll-reveal group block"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 bg-[#162436] shadow-2xl">
                  {item.images && item.images.length > 0 && (
                    <img 
                      src={item.images[0]} 
                      alt={item.product} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#0F1C2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-12 text-center">
                    <span className="text-[#2F6BFF] text-xs font-black tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100">Click to view</span>
                    <span className="text-white font-black text-2xl border-b-2 border-[#2F6BFF] pb-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      해당 포트폴리오 자세히 보기
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-xs font-black text-[#2F6BFF] mb-3 tracking-[0.2em] uppercase">{item.brand}</p>
                  <h4 className="text-2xl font-black text-white mb-2">{item.product}</h4>
                  <div className="flex gap-2">
                    <span className="inline-block bg-[#2F6BFF]/10 text-[#2F6BFF] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      {item.type}
                    </span>
                    {item.images && item.images.length > 1 && (
                      <span className="inline-block bg-white/5 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        +{item.images.length - 1} Images
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-40 text-center scroll-reveal">
            <p className="text-slate-500 font-bold mb-10 tracking-widest">협업 가능한 브랜드 슬롯이 매주 단 2건으로 제한됩니다.</p>
            <button 
              onClick={onInquiryClick}
              className="inline-block px-12 py-5 bg-[#2F6BFF] text-white rounded-2xl text-lg font-black hover:bg-white hover:text-[#0F1C2E] transition-all"
            >
              문의하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
