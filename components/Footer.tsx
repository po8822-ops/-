import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1421] py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        <div>
          <div className="mb-8">
            <img 
              src="https://blogpfthumb-phinf.pstatic.net/MjAyNjAyMTRfMjYz/MDAxNzcxMDMwMzM3Mzc5.Ew56FSmPQc6Da1HGaIAzzqf2KUeM2UlesZJsoy58fe0g.KHJ2RxyrDVyqlTW7qxLPcyYbuiPxctuvyXZHZohaZk0g.PNG/%ED%99%80%EB%A6%B0%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%A1%9C%EA%B3%A0_%EB%88%84%EB%81%BC.png/%25ED%2599%2580%25EB%25A6%25B0%25ED%258E%2598%25EC%259D%25B4%25EC%25A7%2580%2B%25EB%25A1%259C%25EA%25B3%25A0%2B%25EB%2588%2584%25EB%2581%25BC.png?type=w161" 
              alt="HOLINPAGE Logo" 
              className="h-32 md:h-48 w-auto object-contain"
            />
          </div>
          <div className="space-y-3 text-base text-slate-500 font-medium">
            <p>대표자 : 이현근</p>
            <p>E-mail : po8833@naver.com</p>
            <p>사업자번호 : 408-25-61728</p>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-8">
          <div className="flex space-x-8 text-sm font-bold text-slate-400">
            <Link to="/admin" className="text-slate-700 hover:text-white transition">Admin</Link>
          </div>
          <p className="text-sm font-bold text-slate-600 italic">© 2023 HOLIN PAGE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;