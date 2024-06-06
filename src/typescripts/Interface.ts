export interface Job {
  id: string;
  title: string;
  position: string;
  short_desc: string;
  location: string;
  date: string;
  status: "Đã hết hạn" | "Đang tuyển";
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
  onSearchQueryChange: (query: string) => void;
  onSortByChange: (sortBy: string) => void;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}
