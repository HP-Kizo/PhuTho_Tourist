import React, { useState } from "react";
import "./Topics.css";
import {
  Activity,
  Event,
  Folder,
  Introduce,
  News,
  Notification,
} from "../../assets/Icon";
import MainBlogs from "../MainBlogs/MainBlogs";
const Topics: React.FC = () => {
  interface Blogs {
    id: number;
    image: string;
    title: string;
    date: string;
    views: string;
  }
  const blogs: Blogs[] = [
    {
      id: 1,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 1",
      date: "2023-01-01",
      views: "10k",
    },
    {
      id: 2,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 2",
      date: "2023-01-02",
      views: "10k",
    },
    {
      id: 3,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
    {
      id: 4,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
    {
      id: 1,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 1",
      date: "2023-01-01",
      views: "10k",
    },
    {
      id: 2,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 2",
      date: "2023-01-02",
      views: "10k",
    },
    {
      id: 3,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
    {
      id: 4,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
    {
      id: 1,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 1",
      date: "2023-01-01",
      views: "10k",
    },
    {
      id: 2,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 2",
      date: "2023-01-02",
      views: "10k",
    },
    {
      id: 3,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
    {
      id: 4,
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/98ad29179894c56bedc8583b22d5ce71f3025bbf",
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen 3",
      date: "2023-01-03",
      views: "10k",
    },
  ];
  return (
    <div className="topic__wrap">
      <div className="topic-left">
        <h2 className="topic__header">Chủ đề bài viết</h2>
        <ul className="topic__nav">
          <li className="topic__item topic__active">
            <span className="topic__item-icon">{Introduce}</span>
            <span className="topic__item-title">Giới thiệu</span>
          </li>
          <li className="topic__item">
            <span className="topic__item-icon">{News}</span>
            <span className="topic__item-title">Tin tức</span>
          </li>
          <li className="topic__item">
            <span className="topic__item-icon">{Event}</span>
            <span className="topic__item-title">Sự kiện</span>
          </li>
          <li className="topic__item">
            <span className="topic__item-icon">{Notification}</span>
            <span className="topic__item-title">Thông báo</span>
          </li>
          <li className="topic__item">
            <span className="topic__item-icon">{Folder}</span>
            <span className="topic__item-title">Tin cổ đông</span>
          </li>
          <li className="topic__item">
            <span className="topic__item-icon">{Activity}</span>
            <span className="topic__item-title">Hoạt động đoàn thể</span>
          </li>
        </ul>
      </div>
      <MainBlogs blogs={blogs} />
    </div>
  );
};

export default Topics;
