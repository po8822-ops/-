
import { Portfolio, Review, PricePlan } from './types';

export const INITIAL_PORTFOLIOS: Portfolio[] = [
  { id: '1', brand: '에이치랩', product: '메디컬 무릎 보호대', type: '신규 제작', images: ['https://picsum.photos/seed/p1/800/1200'], link: 'https://blog.naver.com' },
  { id: '2', brand: '필앤필', product: 'EMS 저주파 마사지기', type: '리뉴얼', images: ['https://picsum.photos/seed/p2/800/1200'], link: 'https://blog.naver.com' },
  { id: '3', brand: '그린테크', product: '식물성 단백질 파우더', type: '신규 제작', images: ['https://picsum.photos/seed/p3/800/1200'], link: 'https://blog.naver.com' },
  { id: '4', brand: '닥터브레인', product: '기억력 개선 영양제', type: '리뉴얼', images: ['https://picsum.photos/seed/p4/800/1200'], link: 'https://blog.naver.com' },
  { id: '5', brand: '바른자세', product: '인체공학 의자 시트', type: '신규 제작', images: ['https://picsum.photos/seed/p5/800/1200'], link: 'https://blog.naver.com' },
  { id: '6', brand: '클린홈', product: 'UV 살균 텀블러 세척기', type: '리뉴얼', images: ['https://picsum.photos/seed/p6/800/1200'], link: 'https://blog.naver.com' },
];

export const REVIEWS: Review[] = [
  { id: '1', content: "“개떡같이 알려드렸는데 찰떡같이 만들어주셨어요.”" },
  { id: '2', content: "“생각 정리가 안됐었는데 저보다 더 잘 이끌어주셨어요.”" },
  { id: '3', content: "“스케줄을 칼같이 맞춰주셔서 감사했습니다.”" },
  { id: '4', content: "“가격이 죄송할 정도로 합리적이었어요.”" },
];

export const PLANS: PricePlan[] = [
  {
    title: "일반 상세페이지 (디자인)",
    price: "69만원",
    description: "디자인 중심의 깔끔한 제작",
    features: ["기획안 기반 디자인", "길이 추가 금액 없음", "GIF 추가 가능", "원본 PSD 제공", "분할 컷 제공"]
  },
  {
    title: "일반 상세페이지 (기획 + 디자인)",
    price: "99만원",
    description: "시장 분석부터 디자인까지 올인원",
    features: ["설문 및 경쟁사 분석 기반 기획", "심리학 기반 설득 구조 설계", "고퀄리티 디자인 제작", "원본 PSD 제공", "분할 컷 제공"],
    isHighlighted: true
  },
  {
    title: "펀딩 상세페이지 (기획 + 디자인)",
    price: "159만원",
    description: "와디즈/텀블벅 특화 구조 설계",
    features: ["펀딩 특화 스토리보드", "서포터 결제 유도 심리 설계", "GIF를 동반한 고퀄리티 디자인 제작", "원본 PSD 제공", "분할 컷 제공", "심사 통과까지 무제한 수정"]
  }
];

export const BRAND_LOGOS = [
  'https://picsum.photos/seed/logo1/150/60',
  'https://picsum.photos/seed/logo2/150/60',
  'https://picsum.photos/seed/logo3/150/60',
  'https://picsum.photos/seed/logo4/150/60',
  'https://picsum.photos/seed/logo5/150/60',
  'https://picsum.photos/seed/logo6/150/60',
];
