import React from "react";
import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  views: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  author,
  date,
  tags,
  views,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__content">
        <div className="card__header">
          <span className="card__author">{author}</span>
          <span className="card__status">•</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__footer">
          <div className="card__tags">
            {tags.map((tag) => (
              <span key={tag} className="card__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="card__info">
            <span className="card__views">{views} lượt xem</span>
            <span className="card__date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
