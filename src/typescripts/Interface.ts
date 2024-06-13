export interface Job {
  id: number;
  image: string;
  title: string;
  position: string;
  status: string;
  quantity: string;
  workplace: string;
  date: string;
  address: string;
  field: string;
  form: string;
  place: string;
  short_desc: string;
  description: string[];
  workingDays: string;
  workingHours: string;
  benefits: string[];
  requirements: string[];
  age: string;
  lever: string;
  includes: string[];
}
interface Result {
  selectedCompany: string;
  price: string;
  ranking: string;
  contract: string;
}

interface Content {
  intro: string;
  auctionDetails: string[];
  result: Result;
  notice: string;
}

export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  views: number;
  content: Content;
  file: string;
}
export interface Slide {
  background: string;
  title: string;
  description: string;
}

export interface BG {
  bgUrl: string;
  slice: string[];
}

export interface ImageData {
  width: string;
  height: string;
  backgroundImage: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundColor: string;
}

export interface SearchFilterBarProps {
  searchQuery: string;
  sortBy: string;
  startDate: string;
  endDate: string;
  category: string;
  onSearchQueryChange: (query: string) => void;
  onSortByChange: (sortBy: string) => void;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  setCategory: (category: string) => void;
}

export interface Reports {
  id: number;
  title: string;
  year: string;
  fileUrl: string;
  image: string;
}

export interface DocumentTable {
  id: number;
  name: string;
  fileUrl: string;
  creationDate: string;
}
