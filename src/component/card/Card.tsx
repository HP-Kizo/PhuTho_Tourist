import React from "react";
import "./Card.css";
import { ElipseOn } from "../../assets/Icon";
import { ElipseOff } from "../../assets/Icon";
import { Blog } from "../../typescripts/Interface";

const Card: React.FC<Blog> = ({
  image,
  title,
  description,
  author,
  date,
  views,
}) => {
  function roundUpToNearestThousand(num: number): number {
    return Math.ceil(num / 1000);
  }
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <div className="card__header">
          <div className="card__position">
            <span className="card__author">{author}</span>
            {ElipseOn}
          </div>
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>

        <div className="card__footer">
          <div className="card__tags">
            <button className="btn card__tag">Sự kiện</button>
            <button className="btn card__tag">Thông báo</button>
            <button className="btn card__tag">Tin tức</button>
          </div>
          <div className="card__info">
            <span className="card__views">
              {roundUpToNearestThousand(views)}N lượt xem
            </span>
            <span className="card__elipse">{ElipseOff}</span>
            <span className="card__date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
