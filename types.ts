
export interface Paper {
  id: string;
  title: string;
  year: number;
  journal?: string;
  conference?: string;
  abstract: string;
  link?: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  level: 'Undergraduate' | 'Postgraduate';
  semester: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export enum ImageSize {
  OneK = '1K',
  TwoK = '2K',
  FourK = '4K'
}

export interface SearchResult {
  type: string;
  title: string;
  description: string;
  link: string;
}
