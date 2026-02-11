
import React, { useState } from 'react';
import { InquiryData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    phone: '',
    brand: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 버튼 비활성화 (여러 번 클릭 방지)
    setIsSubmitting(true);

    // 사용자가 제공한 새로운 Google Apps Script URL
    const url = 'https://script.google.com/macros/s/AKfycby1DYi1OoNIJc-kWkGyGHDOlYSSgJMhuDKuUmtPEXmaVjtzIb9WpIWdevQ4LJZeuTA0bQ/exec';
    
    const body = new FormData();
    body.append('name', formData.name);
    body.append('phone', formData.phone);
    body.append('brand', formData.brand);

    fetch(url, {
      method: 'POST',
      body: body
    })
    .then(res => {
      alert('문의가 성공적으로 접수되었습니다. 확인 후 연락드리겠습니다!');
      // 폼 초기화
      setFormData({ name: '', phone: '', brand: '' });
      onClose();
    })
    .catch(error => {
      alert('오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      console.error('Error!', error.message);
    })
    .finally(() => {
      // 버튼 활성화 및 텍스트 복구
      setIsSubmitting(false);
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-[#0F1C2E]/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-xl bg-[#162436] p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="contact-form-container">
          <h2 className="text-3xl font-black mb-2 text-white tracking-tighter">프로젝트 문의하기</h2>
          <p className="text-slate-500 font-bold mb-10">귀사의 비즈니스 구조를 함께 설계합니다.</p>

          <form id="projectContactForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="input-group space-y-3">
              <label className="text-[10px] font-black text-[#2F6BFF] uppercase tracking-widest">담당자 성함 / 직책</label>
              <input 
                required 
                type="text" 
                name="name" 
                placeholder="담당자 성함 / 직책"
                className="w-full px-6 py-5 bg-[#0F1C2E] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#2F6BFF] transition-all font-bold text-lg text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div className="input-group space-y-3">
              <label className="text-[10px] font-black text-[#2F6BFF] uppercase tracking-widest">연락처</label>
              <input 
                required 
                type="tel" 
                name="phone" 
                placeholder="연락처"
                className="w-full px-6 py-5 bg-[#0F1C2E] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#2F6BFF] transition-all font-bold text-lg text-white"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div className="input-group space-y-3">
              <label className="text-[10px] font-black text-[#2F6BFF] uppercase tracking-widest">브랜드명 / 제품명</label>
              <input 
                required 
                type="text" 
                name="brand" 
                placeholder="브랜드명 / 제품명"
                className="w-full px-6 py-5 bg-[#0F1C2E] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#2F6BFF] transition-all font-bold text-lg text-white"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              id="submitBtn"
              disabled={isSubmitting}
              className={`w-full py-6 mt-8 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-900/20 ${isSubmitting ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-[#2F6BFF] text-white hover:bg-white hover:text-[#0F1C2E]'}`}
            >
              {isSubmitting ? '전송 중...' : '문의접수 완료하기'}
            </button>
          </form>
          
          <p className="footer-text mt-8 text-[10px] text-slate-500 text-center font-bold">
            접수 시 영업일 기준 24시간 내에 기획자가 연락드립니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
