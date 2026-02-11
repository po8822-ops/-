
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PLANS } from '../constants';

interface PricingPageProps {
  onInquiryClick: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onInquiryClick }) => {
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
      
      <section className="pt-52 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Pricing</h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            홀린페이지는 추가 비용 없는 정찰제를 고수합니다.<br />
            가장 합리적인 선택을 도와드립니다.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <div key={idx} className={`scroll-reveal p-12 rounded-[3.5rem] flex flex-col border-2 transition-all duration-500 ${plan.isHighlighted ? 'border-[#2F6BFF] bg-white text-[#0F1C2E] scale-105 shadow-[0_40px_100px_rgba(47,107,255,0.15)] relative' : 'border-white/5 bg-[#162436]'}`}>
              {plan.isHighlighted && <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2F6BFF] text-white px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-xl">RECOMMENDED</span>}
              <h3 className="text-2xl font-black mb-3">{plan.title}</h3>
              <p className={`text-sm font-bold mb-10 ${plan.isHighlighted ? 'text-[#2F6BFF]' : 'text-slate-500'}`}>{plan.description}</p>
              <div className="text-5xl font-black mb-12 tracking-tighter">{plan.price} <span className="text-base font-normal opacity-40">/ 부가세 별도</span></div>
              <div className="space-y-6 mb-16 flex-grow">
                {plan.features.map((f, fidx) => (
                  <div key={fidx} className="flex items-start text-base font-bold leading-tight">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 text-[#2F6BFF]`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {f}
                  </div>
                ))}
              </div>
              <button 
                onClick={onInquiryClick}
                className={`w-full py-6 rounded-2xl font-black text-xl transition-all ${plan.isHighlighted ? 'bg-[#0F1C2E] text-white hover:bg-[#2F6BFF]' : 'bg-white text-[#0F1C2E] hover:bg-[#2F6BFF] hover:text-white'}`}
              >
                문의하기
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON INCLUSION - ADJUSTED TO ONE LINE AND SMALLER FONT */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto scroll-reveal text-center p-16 rounded-[4rem] border border-[#2F6BFF]/20 bg-[#162436]/50 shadow-2xl overflow-hidden">
          <h4 className="text-xs font-black mb-10 tracking-[0.4em] uppercase text-[#2F6BFF]">Holin Common Inclusion</h4>
          <div className="flex flex-nowrap items-center justify-center gap-x-6 md:gap-x-10 text-base md:text-lg font-black text-white/90 whitespace-nowrap overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
             <span className="hover:text-[#2F6BFF] transition-colors shrink-0"># 길이 추가 비용 없음</span>
             <span className="hover:text-[#2F6BFF] transition-colors shrink-0"># GIF 추가 무상 지원</span>
             <span className="hover:text-[#2F6BFF] transition-colors shrink-0"># 고해상도 분할 컷 제공</span>
             <span className="hover:text-[#2F6BFF] transition-colors shrink-0"># 세금계산서 발행 가능</span>
          </div>
          <p className="mt-12 text-slate-500 font-bold text-sm">홀린페이지는 복잡한 옵션질로 고객을 기만하지 않습니다.</p>
        </div>
      </section>

      {/* POLICIES (SAFE POLICY) - UPDATED TITLE AND DESCRIPTION STRUCTURE */}
      <section className="py-40 bg-[#0A1421] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-24 tracking-tight">홀린페이지만의 안심 정책</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="scroll-reveal bg-[#2F6BFF]/5 border border-[#2F6BFF]/20 p-12 rounded-[3rem]">
              <div className="text-[#2F6BFF] font-black text-4xl mb-8 opacity-30">01</div>
              <h4 className="text-2xl font-black mb-5">1차 시안 후 100% 환불</h4>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">실패 없는 외주를 위해 준비했습니다. 시안이 만족스럽지 않다면 고민 없이 전액 환불해 드립니다.</p>
            </div>
            <div className="scroll-reveal bg-[#162436] border border-white/5 p-12 rounded-[3rem]">
              <div className="text-slate-600 font-black text-4xl mb-8 opacity-30">02</div>
              <h4 className="text-2xl font-black mb-5">가격 정찰제 & 원본 제공</h4>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">
                추가금 유도 없이 처음 약속한 금액 그대로 진행하며,<br />
                수정에 용이한 PSD 원본 파일을 무상 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tight">자주 묻는 질문</h2>
          <div className="space-y-6">
            {[
              { q: "제작 기간은 얼마나 걸리나요?", a: "기획안은 약 3영업일, 디자인은 7 영업일 내외로 시안이 전달됩니다.\n*작업이 많을 경우 지연될 수 있으며, 미리 안내해드립니다." },
              { q: "촬영도 가능한가요?", a: "협력 스튜디오를 통해 고퀄리티 촬영 대행이 가능합니다. (별도 협의)" },
              { q: "원본 파일(PSD)을 주시나요?", a: "네, 원본 PSD 파일을 조건 없이 무상으로 제공합니다." },
              { q: "세금계산서 발행이 가능한가요?", a: "네, 세금계산서 발행 가능합니다." },
              { q: "수정이 필요한 경우 어떻게 하나요?", a: "최종안 전달 전에는 가능한 범위 내에서 수정해드리며,\n최종안 전달 후에는 한 달 이내 3회 무료로 수정해드리고 있습니다.\n*이후엔 유료로 진행됩니다." },
            ].map((faq, idx) => (
              <div key={idx} className="p-8 bg-[#162436] rounded-3xl border border-white/5">
                <p className="text-[#2F6BFF] font-black mb-3 text-lg">Q. {faq.q}</p>
                <p className="text-slate-400 font-medium leading-relaxed whitespace-pre-line">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
