import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CompanyProps {
  onInquiryClick: () => void;
}

const Company: React.FC<CompanyProps> = ({ onInquiryClick }) => {
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
      
      {/* HEADER */}
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-6xl mx-auto scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">디자인 그 이상의<br /><span className="text-[#2F6BFF]">비즈니스 구조 설계</span></h1>
          <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl">
            상세페이지는 그냥 상품 소개 이미지가 아닙니다.<br />
            고객의 구매 심리를 꿰뚫는 구조로 설계하여,<br />
            <span className="text-white font-bold">24시간 일하는 영업 사원</span>처럼 일해야 진짜 상세페이지입니다.
          </p>
        </div>
      </section>

      {/* STORY SECTION: WHY HOLEEN PAGE */}
      <section className="py-40 px-6 bg-[#162436]/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-[#2F6BFF] tracking-tight">홀린페이지를 만들게 된 이유</h2>
            <h3 className="text-2xl md:text-3xl font-black mb-12 leading-tight">
              몸의 구조를 보던 사람이<br />
              지금은 판매 구조를 설계합니다.
            </h3>
            
            <div className="space-y-8 text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              <p>
                저는 10년 넘게 도수치료를 해온 물리치료사였습니다.<br />
                그 경험을 전하고 싶어 전자책을 만들었고,<br />
                처음으로 상세페이지를 제작하게 되었죠.
              </p>
              <p>
                하지만 외주를 맡기며 알게 됐습니다.<br />
                <span className="text-white underline underline-offset-4 decoration-[#2F6BFF]">디자인은 있었지만, 구조는 없다는 것을.</span>
              </p>
              <p>
                그때부터 잘 팔리는 상세페이지를 분석하고<br />
                구매로 이어지는 흐름을 공부했습니다.<br />
                그리고 직접 기획한 페이지로<br />
                매출이 플러스로 전환되는 경험을 하게 되었죠.
              </p>
              <p>
                그 경험을 계기로 지금의 ‘홀린페이지’를 시작했습니다.
              </p>
            </div>
          </div>

          <div className="scroll-reveal bg-[#0F1C2E] p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
            <h4 className="text-2xl font-black mb-10">홀린페이지는 다르게 일합니다.</h4>
            <ul className="space-y-6 text-lg font-bold">
              <li className="flex items-start gap-4">
                <span className="text-[#2F6BFF] mt-1 shrink-0">●</span>
                <span>디자인보다 먼저 구조를 설계합니다.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#2F6BFF] mt-1 shrink-0">●</span>
                <span>생각이 정리되지 않아도 함께 방향을 잡습니다.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#2F6BFF] mt-1 shrink-0">●</span>
                <span>약속한 일정은 반드시 지킵니다.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#2F6BFF] mt-1 shrink-0">●</span>
                <span>템플릿이 아닌 맞춤형으로 진행합니다.</span>
              </li>
            </ul>
            
            <div className="mt-16 pt-10 border-t border-white/5 text-slate-400 leading-relaxed">
              <p className="mb-6">
                상세페이지 외주 업체는 정말 많습니다.<br />
                저희는 한 번으로 끝나는 업체가 아니라,<br />
                <span className="text-white font-black">다음 작업도 맡기고 싶은 팀</span>으로 남고 싶습니다.
              </p>
              <p className="text-white font-black text-xl italic">
                대표님의 성과가 곧 저희의 성과라고 생각하거든요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="py-32 px-6 bg-[#0A1421]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="scroll-reveal">
            <h2 className="text-3xl font-black mb-10 text-[#2F6BFF] uppercase tracking-widest">Company Identity</h2>
            <div className="space-y-12">
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
          <div className="scroll-reveal bg-[#162436] p-12 rounded-[3rem] border border-white/5">
             <h3 className="text-3xl font-black mb-10">우리의 약속</h3>
             <ul className="space-y-8">
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">1</span>
                 <p className="text-slate-300">빠른 소통과 마감 일정은 무조건 엄수합니다.</p>
               </li>
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">2</span>
                 <p className="text-slate-300">대표님의 피드백은 빠르고 유연하게 반영합니다.</p>
               </li>
               <li className="flex items-start">
                 <span className="w-8 h-8 rounded-lg bg-[#2F6BFF] text-white flex items-center justify-center mr-5 font-black shrink-0">3</span>
                 <p className="text-slate-300">저희 상품을 판매하듯 최선을 다하겠습니다.</p>
               </li>
             </ul>
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
              { id: "06", title: "최종본 전달", desc: <>쉬운 업로드를 위해 분할 컷과<br />원본 PSD를 무상 제공합니다.</> },
            ].map((step, idx) => (
              <div key={idx} className="scroll-reveal group p-10 bg-[#162436] rounded-[2.5rem] hover:bg-[#2F6BFF]/10 transition-all duration-500">
                <div className="text-[#2F6BFF] font-black text-6xl mb-10 opacity-20">{step.id}</div>
                <h4 className="text-xl font-black mb-5">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium text-[14px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;