import React from "react";
import "./ServiceCard.css";
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card__image" />
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
