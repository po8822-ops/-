
export interface Portfolio {
  id: string;
  brand: string;
  product: string;
  type: '신규 제작' | '리뉴얼';
  images: string[];
  link: string;
}

export interface Review {
  id: string;
  content: string;
  author?: string;
}

export interface PricePlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface InquiryData {
  name: string;
  phone: string;
  brand: string;
}
