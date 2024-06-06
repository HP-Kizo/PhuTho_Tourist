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
  const [category, setCategory] = useState<string>("gioi-thieu");

  return (
    <div className="topic__wrap">
      <div className="topic-left">
        <h2 className="topic__header">Chủ đề bài viết</h2>
        <ul className="topic__nav">
          <li
            className={
              category === "gioi-thieu"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("gioi-thieu")}
          >
            <span className="topic__item-icon">{Introduce}</span>
            <span className="topic__item-title">Giới thiệu</span>
          </li>
          <li
            className={
              category === "tin-tuc"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("tin-tuc")}
          >
            <span className="topic__item-icon">{News}</span>
            <span className="topic__item-title">Tin tức</span>
          </li>
          <li
            className={
              category === "su-kien"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("su-kien")}
          >
            <span className="topic__item-icon">{Event}</span>
            <span className="topic__item-title">Sự kiện</span>
          </li>
          <li
            className={
              category === "thong-bao"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("thong-bao")}
          >
            <span className="topic__item-icon">{Notification}</span>
            <span className="topic__item-title">Thông báo</span>
          </li>
          <li
            className={
              category === "tin-co-dong"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("tin-co-dong")}
          >
            <span className="topic__item-icon">{Folder}</span>
            <span className="topic__item-title">Tin cổ đông</span>
          </li>
          <li
            className={
              category === "hoat-dong-doan-the"
                ? "topic__item topic__active"
                : "topic__item"
            }
            onClick={() => setCategory("hoat-dong-doan-the")}
          >
            <span className="topic__item-icon">{Activity}</span>
            <span className="topic__item-title">Hoạt động đoàn thể</span>
          </li>
        </ul>
      </div>
      <MainBlogs category={category} />
    </div>
  );
};

export default Topics;
