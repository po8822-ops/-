
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1421] py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        <div>
          <h2 className="text-3xl font-black tracking-tighter text-white mb-8">
            HOLIN<span className="text-[#2F6BFF]">PAGE</span>
          </h2>
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
