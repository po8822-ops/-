
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Portfolio } from '../types';

interface AdminProps {
  portfolios: Portfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
  brandLogos: string[];
  setBrandLogos: React.Dispatch<React.SetStateAction<string[]>>;
}

const Admin: React.FC<AdminProps> = ({ portfolios, setPortfolios, brandLogos, setBrandLogos }) => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const portfolioFileInputRef = useRef<HTMLInputElement>(null);
  const logoFileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<Omit<Portfolio, 'id'>>({
    brand: '',
    product: '',
    type: '신규 제작',
    images: [],
    link: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2213') {
      setIsAuthorized(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePortfolioImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const base64Images = await Promise.all(
      Array.from(files).map(file => fileToBase64(file as File))
    );

    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...base64Images]
    }));

    if (portfolioFileInputRef.current) portfolioFileInputRef.current.value = '';
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const base64Logos = await Promise.all(
      Array.from(files).map(file => fileToBase64(file as File))
    );

    setBrandLogos(prev => [...prev, ...base64Logos]);

    if (logoFileInputRef.current) logoFileInputRef.current.value = '';
  };

  const removeLogo = (index: number) => {
    if (window.confirm('이 파트너사 로고를 삭제하시겠습니까?')) {
      setBrandLogos(brandLogos.filter((_, i) => i !== index));
    }
  };

  const removePortfolioImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.images.length === 0) {
      alert('이미지를 최소 1장 이상 업로드해주세요.');
      return;
    }
    const newItem: Portfolio = {
      ...formData,
      id: Date.now().toString()
    };
    setPortfolios([newItem, ...portfolios]);
    setFormData({ brand: '', product: '', type: '신규 제작', images: [], link: '' });
  };

  const handleDeletePortfolio = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setPortfolios(portfolios.filter(p => p.id !== id));
    }
  };

  const startEditPortfolio = (p: Portfolio) => {
    setEditingId(p.id);
    setFormData({ brand: p.brand, product: p.product, type: p.type, images: p.images, link: p.link });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdatePortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    if (formData.images.length === 0) {
      alert('이미지를 최소 1장 이상 업로드해주세요.');
      return;
    }
    setPortfolios(portfolios.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
    setEditingId(null);
    setFormData({ brand: '', product: '', type: '신규 제작', images: [], link: '' });
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1C2E] px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-[#162436] p-16 rounded-[4rem] shadow-2xl border border-white/5">
          <h1 className="text-3xl font-black mb-12 text-center text-white tracking-tighter">HOLIN <span className="text-[#2F6BFF]">ADMIN</span></h1>
          <div className="space-y-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-5 bg-[#0F1C2E] border-none rounded-2xl outline-none focus:ring-2 focus:ring-[#2F6BFF] transition-all font-bold text-lg text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit" className="w-full py-5 bg-[#2F6BFF] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#0F1C2E] transition-all shadow-xl">
              Login
            </button>
            <Link to="/" className="block text-center text-slate-500 font-bold text-sm hover:text-white transition">Back to Home</Link>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white p-6 md:p-12 lg:p-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div>
            <h1 className="text-5xl font-black tracking-tight mb-4">Holin Admin Console</h1>
            <p className="text-slate-500 font-bold">포트폴리오 및 파트너사 로고를 관리할 수 있습니다.</p>
          </div>
          <Link to="/" className="px-10 py-4 bg-white text-[#0F1C2E] rounded-full font-black text-sm hover:bg-[#2F6BFF] hover:text-white transition-all">
            HOME PAGE →
          </Link>
        </div>

        {/* LOGO MANAGEMENT SECTION */}
        <section className="mb-24 scroll-reveal visible">
          <div className="bg-[#162436] p-10 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter">Partner Logos</h2>
                <p className="text-slate-500 font-bold">메인 페이지 하단에 롤링되는 파트너사 로고들입니다.</p>
              </div>
              <div className="shrink-0">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  ref={logoFileInputRef}
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <button 
                  onClick={() => logoFileInputRef.current?.click()}
                  className="px-10 py-5 bg-[#2F6BFF] text-white rounded-2xl font-black text-lg hover:bg-white hover:text-[#0F1C2E] transition-all shadow-xl"
                >
                  + 파트너 로고 업로드
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {brandLogos.map((logo, idx) => (
                <div key={idx} className="relative group aspect-[3/1] bg-[#0F1C2E] rounded-2xl overflow-hidden p-4 flex items-center justify-center border border-white/5">
                  <img src={logo} alt="brand" className="max-w-full max-h-full object-contain grayscale invert opacity-60 group-hover:opacity-100 transition-opacity" />
                  <button 
                    onClick={() => removeLogo(idx)}
                    className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-black text-xs transition-opacity"
                  >
                    삭제
                  </button>
                </div>
              ))}
              {brandLogos.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-600 font-bold border-2 border-dashed border-white/5 rounded-[3rem]">
                  업로드된 파트너 로고가 없습니다.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PORTFOLIO MANAGEMENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="bg-[#162436] p-10 rounded-[3.5rem] shadow-xl border border-white/5 sticky top-12">
              <h2 className="text-2xl font-black mb-10">{editingId ? 'Edit Item' : 'New Project'}</h2>
              <form onSubmit={editingId ? handleUpdatePortfolio : handleAddPortfolio} className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Brand</label>
                  <input required placeholder="예: 필앤필" className="w-full px-6 py-4 bg-[#0F1C2E] rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#2F6BFF] font-bold text-white" value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Product</label>
                  <input required placeholder="예: EMS 마사지기" className="w-full px-6 py-4 bg-[#0F1C2E] rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#2F6BFF] font-bold text-white" value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})} />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Type</label>
                  <select className="w-full px-6 py-4 bg-[#0F1C2E] rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#2F6BFF] font-bold text-white appearance-none" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value as any})}>
                    <option value="신규 제작">신규 제작</option>
                    <option value="리뉴얼">리뉴얼</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Images (Multiple Upload)</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    ref={portfolioFileInputRef}
                    onChange={handlePortfolioImageChange}
                    className="hidden"
                  />
                  <button 
                    type="button"
                    onClick={() => portfolioFileInputRef.current?.click()}
                    className="w-full px-6 py-4 bg-[#0F1C2E] rounded-2xl border-2 border-dashed border-[#2F6BFF]/30 hover:border-[#2F6BFF] transition text-sm font-bold text-slate-400"
                  >
                    + 내 컴퓨터에서 이미지 선택
                  </button>
                  
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {formData.images.map((img, i) => (
                        <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                          <img src={img} className="w-full h-full object-cover" />
                          <button 
                            type="button" 
                            onClick={() => removePortfolioImage(i)}
                            className="absolute inset-0 bg-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-black"
                          >
                            DEL
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Blog Link</label>
                  <input required placeholder="https://blog.naver.com/..." className="w-full px-6 py-4 bg-[#0F1C2E] rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#2F6BFF] font-bold text-white" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />
                </div>

                <button type="submit" className="w-full py-6 bg-[#2F6BFF] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#0F1C2E] transition-all shadow-lg mt-6">
                  {editingId ? 'Save Changes' : 'Publish Project'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => { setEditingId(null); setFormData({ brand: '', product: '', type: '신규 제작', images: [], link: '' }); }} className="w-full py-4 bg-slate-800 text-slate-400 font-bold rounded-xl hover:text-white transition">
                    Cancel Edit
                  </button>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black mb-12 px-6">Live Portfolio Database ({portfolios.length})</h2>
            <div className="grid grid-cols-1 gap-6">
              {portfolios.map(p => (
                <div key={p.id} className="bg-[#162436] p-8 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row justify-between items-center group hover:border-[#2F6BFF]/30 transition-all">
                  <div className="flex items-center gap-8 mb-6 md:mb-0 w-full">
                    <div className="relative w-24 h-24 bg-[#0F1C2E] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
                      {p.images && p.images.length > 0 ? (
                        <img src={p.images[0]} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-700 font-black">NO IMG</div>
                      )}
                      {p.images && p.images.length > 1 && (
                        <div className="absolute top-1 right-1 bg-[#2F6BFF] text-white text-[8px] px-1.5 py-0.5 rounded-full font-black">
                          {p.images.length}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#2F6BFF] uppercase tracking-widest mb-2">{p.brand}</p>
                      <h4 className="text-2xl font-black text-white mb-2">{p.product}</h4>
                      <p className="text-slate-500 text-xs font-bold">{p.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full md:w-auto">
                    <button onClick={() => startEditPortfolio(p)} className="flex-grow md:flex-none px-8 py-3 bg-slate-800 text-slate-300 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">Edit</button>
                    <button onClick={() => handleDeletePortfolio(p.id)} className="flex-grow md:flex-none px-8 py-3 bg-slate-800 text-slate-300 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
