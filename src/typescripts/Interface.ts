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
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  views: number;
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
