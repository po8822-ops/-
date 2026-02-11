
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Portfolio } from '../types';

interface HomeProps {
  portfolios: Portfolio[];
  brandLogos: string[];
  onInquiryClick: () => void;
}

const Home: React.FC<HomeProps> = ({ portfolios, brandLogos, onInquiryClick }) => {
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

  const featuredPortfolios = portfolios.slice(0, 3);

  // 무한 롤링을 위해 로고 리스트를 복제합니다.
  const rollingLogos = brandLogos.length > 0 ? [...brandLogos, ...brandLogos] : [];

  return (
    <div className="bg-[#0F1C2E] text-white selection:bg-[#2F6BFF] selection:text-white">
      <Navbar onInquiryClick={onInquiryClick} />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#2F6BFF]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[50%] h-[50%] bg-[#2F6BFF]/5 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="scroll-reveal inline-block px-5 py-2 mb-12 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 text-[#2F6BFF] text-xs font-black tracking-widest uppercase">
            Holin Page Structure Design
          </div>
          <h1 className="scroll-reveal text-5xl md:text-[92px] font-black leading-[1.05] mb-12 tracking-tight">
            상세페이지,<br />
            <span className="text-slate-500">만들었는데</span> 왜 아직도<br />
            안 팔릴까요?
          </h1>
          <p className="scroll-reveal text-xl md:text-2xl text-slate-400 font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
            디자인은 마음에 드는데 매출은 그대로?<br />
            진짜 안팔리는 이유는 디자인이 아니라<br />
            <span className="text-white font-bold underline underline-offset-8 decoration-2 decoration-[#2F6BFF]">구조가 빠졌기 때문입니다.</span>
          </p>

          <div className="scroll-reveal flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-6 mb-24">
            <button 
              onClick={onInquiryClick}
              className="w-full md:w-auto px-16 py-6 bg-[#2F6BFF] text-white rounded-2xl text-xl font-black hover:bg-white hover:text-[#0F1C2E] transition-all shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1"
            >
              문의하기
            </button>
            <Link to="/portfolio" className="w-full md:w-auto px-12 py-6 bg-transparent text-white border-2 border-slate-700 rounded-2xl text-xl font-black hover:border-white transition-all transform hover:-translate-y-1">
              포트폴리오 보기
            </Link>
          </div>

          <div className="scroll-reveal mt-20 opacity-40 overflow-hidden">
            <p className="text-xs font-bold text-slate-500 tracking-[0.4em] uppercase mb-14">Trusted Strategic Partner</p>
            <div className="relative w-full overflow-hidden grayscale invert">
              <div className="animate-marquee flex items-center gap-16 md:gap-24">
                {rollingLogos.map((logo, idx) => (
                  <img key={idx} src={logo} alt="brand" className="h-10 md:h-14 object-contain shrink-0" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS & IDENTITY */}
      <section className="py-32 bg-[#0A1421] border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                판매는 감각이 아니라<br /><span className="text-[#2F6BFF]">구조입니다.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                우리는 ‘구매 결정’을 설계합니다.<br />
                물리치료사 출신 구조 설계자와 10년차 디자이너가 만나<br />
                디자인 이상의 비즈니스 가치를 창조합니다.
              </p>
              <div className="space-y-10">
                <div className="border-l-4 border-[#2F6BFF] pl-8">
                  <h3 className="text-2xl font-black mb-4">물리치료사 출신 기획자</h3>
                  <p className="text-slate-400 leading-relaxed">
                    인체의 구조를 파고들듯, 제품과 시장의 구조를 분석합니다.<br />
                    특히 헬스케어와 건강 카테고리에서 기획력은 독보적입니다.
                  </p>
                </div>
                <div className="border-l-4 border-slate-700 pl-8">
                  <h3 className="text-2xl font-black mb-4">10년차 베테랑 디자이너</h3>
                  <p className="text-slate-400 leading-relaxed">
                    단순히 예쁜 그림이 아닙니다. 기획의 의도를 120% 살려내는<br />
                    시각적 언어를 통해 고객의 스크롤을 멈추게 만듭니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="scroll-reveal bg-[#162436] p-12 rounded-[3rem] border border-white/5 h-fit">
               <h3 className="text-3xl font-black mb-10">우리의 세 가지 약속</h3>
               <ul className="space-y-8">
                 <li className="flex items-start">
                   <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">1</span>
                   <p className="text-slate-300 text-lg">빠른 소통과 마감 일정은 무조건 엄수합니다.</p>
                 </li>
                 <li className="flex items-start">
                   <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">2</span>
                   <p className="text-slate-300 text-lg">대표님의 피드백은 빠르고 유연하게 반영합니다.</p>
                 </li>
                 <li className="flex items-start">
                   <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">3</span>
                   <p className="text-slate-300 text-lg">저희 상품을 판매하듯 최선을 다하겠습니다.</p>
                 </li>
               </ul>
               <div className="mt-12 pt-10 border-t border-white/5">
                 <Link to="/company" className="text-[#2F6BFF] font-black hover:text-white transition-all uppercase tracking-widest text-sm">회사소개 더보기 →</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-reveal text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">작업 프로세스</h2>
            <p className="text-slate-500 text-xl font-bold">실패 확률을 0%로 만드는 홀린페이지만의 시스템</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { id: "01", title: "설문지 작성 및 선금 결제", desc: <>고객사의 강점과 시장의 기회를 찾는<br />첫 단추입니다.</> },
              { id: "02", title: "심층 분석", desc: <>경쟁사 데이터와 시장분석,<br />소비심리를 정밀하게 파고듭니다.</> },
              { id: "03", title: "기획 확정", desc: <>충분한 소통을 통해 기획안 컨펌 후<br />진행합니다.</> },
              { id: "04", title: "촬영&디자인", desc: <>제품의 가치를 최대로 살릴 수 있는<br />비주얼을 제작합니다.</> },
              { id: "05", title: "1차 시안 컨펌&잔금 결제", desc: <>사소한 디테일까지 꼼꼼하게 다듬고<br />완성합니다.</> },
              { id: "06", title: "최종본 전달", desc: <>쉬운 업로드를 위해 분할 컷과 원본 PSD를<br />무상 제공합니다.</> },
            ].map((step, idx) => (
              <div key={idx} className="scroll-reveal group p-10 bg-[#162436] rounded-[2.5rem] border border-white/5 hover:bg-[#2F6BFF]/10 transition-all duration-500">
                <div className="text-[#2F6BFF] font-black text-6xl mb-10 opacity-20 group-hover:opacity-100 transition-opacity">{step.id}</div>
                <h4 className="text-2xl font-black mb-5">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="py-40 px-6 bg-[#0A1421]">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal flex justify-between items-end mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">포트폴리오</h2>
            <Link to="/portfolio" className="text-[#2F6BFF] font-black hover:text-white transition-all border-b border-[#2F6BFF]">전체 포트폴리오 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredPortfolios.map((item) => (
              <Link 
                key={item.id} 
                to="/portfolio" 
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
                  <div className="absolute inset-0 bg-[#0F1C2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <span className="text-white font-black text-xl border-b-2 border-[#2F6BFF] pb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      자세히 보기
                    </span>
                  </div>
                </div>
                <div className="px-4">
                  <p className="text-xs font-black text-[#2F6BFF] mb-2 uppercase tracking-widest">{item.brand}</p>
                  <h4 className="text-xl font-black text-white">{item.product}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAFE POLICY & LIMITED AVAILABILITY & FAQ SECTION */}
      <section className="py-40 px-6 bg-[#0F1C2E]">
        <div className="max-w-6xl mx-auto">
          {/* Safe Policy Sub-section */}
          <div className="mb-40">
            <div className="scroll-reveal text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">홀린페이지만의 안심 정책</h2>
              <p className="text-slate-500 text-lg font-bold">결과에 대한 확신이 있기에 제안하는 약속</p>
            </div>
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
                  추가금 유도 없이 처음 약속드린 견적 그대로 진행하며,<br />
                  수정에 필요한 PSD 원본 파일을 무상 제공합니다.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center scroll-reveal">
              <Link to="/pricing" className="inline-block text-[#2F6BFF] hover:text-white text-xl font-black border-b-2 border-[#2F6BFF] hover:border-white pb-1 transition-all">
                정직한 가격 안내 보기 →
              </Link>
            </div>
          </div>

          {/* NEW: LIMITED AVAILABILITY SECTION */}
          <div className="scroll-reveal mb-40">
             <div className="relative overflow-hidden bg-gradient-to-r from-[#2F6BFF] to-[#1E4DFF] p-16 md:p-24 rounded-[4rem] shadow-2xl shadow-blue-900/30 text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-white rounded-full blur-[80px]"></div>
                  <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-black rounded-full blur-[80px]"></div>
                </div>
                <div className="relative z-10">
                   <div className="inline-block px-6 py-2 mb-8 rounded-full bg-white/20 text-white text-sm font-black tracking-widest uppercase backdrop-blur-sm">
                      Workload Limitation
                   </div>
                   <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">
                      맞춤형 고퀄리티 작업을 위해<br className="md:hidden" /> <span className="underline underline-offset-8 decoration-white/40">매주 2건의 작업만 진행합니다.</span>
                   </h3>
                   <p className="text-white/70 text-lg font-bold">
                      단순한 공장이 아닌, 하나의 작품을 설계하기 위한 고집입니다.
                   </p>
                </div>
             </div>
          </div>

          {/* FAQ Sub-section */}
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">자주 묻는 질문</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: "제작 기간은 얼마나 걸리나요?", a: "기획안은 약 3영업일, 디자인은 7 영업일 내외로 시안이 전달됩니다.\n*작업이 많을 경우 지연될 수 있으며, 미리 안내해드립니다." },
                { q: "촬영도 가능한가요?", a: "협력 스튜디오를 통해 고퀄리티 촬영 대행이 가능합니다. (별도 협의)" },
                { q: "원본 파일(PSD)을 주시나요?", a: "네, 원본 PSD 파일을 조건 없이 무상으로 제공합니다." },
                { q: "세금계산서 발행이 가능한가요?", a: "네, 세금계산서 발행 가능합니다." },
                { q: "수정이 필요한 경우 어떻게 하나요?", a: "최종안 전달 전에는 가능한 범위 내에서 수정해드리며,\n최종안 전달 후에는 한 달 이내 3회 무료로 수정해드리고 있습니다.\n*이후엔 유료로 진행됩니다." },
              ].map((faq, idx) => (
                <div key={idx} className="scroll-reveal p-8 bg-[#162436] rounded-[2.5rem] border border-white/5">
                  <p className="text-[#2F6BFF] font-black mb-3 text-lg">Q. {faq.q}</p>
                  <p className="text-slate-400 font-medium leading-relaxed whitespace-pre-line">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-44 px-6 bg-[#2F6BFF] text-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight">
            혹시 상세페이지 리뉴얼을 고민하고 오셨다면?
          </h2>
          <p className="text-xl md:text-2xl font-black mb-8 opacity-90">
            저희에게 홀려서 덜컥 의뢰하지 마시고,<br />
            무료 진단부터 받아보세요
          </p>
          <p className="text-base font-bold mb-12 opacity-70">
            20만원 상당의 프리미엄 구조 진단을 한시적으로 무료 진행합니다.
          </p>
          <button 
            onClick={onInquiryClick}
            className="inline-block px-16 py-7 bg-[#0F1C2E] text-white rounded-3xl text-2xl font-black hover:bg-white hover:text-[#0F1C2E] transition-all transform hover:scale-105 shadow-2xl"
          >
            문의하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
