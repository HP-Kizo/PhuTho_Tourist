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
const Topics: React.FC = () => (
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
  </div>
);

export default Topics;
