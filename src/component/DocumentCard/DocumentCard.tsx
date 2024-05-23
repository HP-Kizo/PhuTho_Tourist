import React from "react";
import "./DocumentCard.css";
import { DocumentIcon } from "../../assets/Icon";

interface Document {
  id: number;
  title: string;
  year: string;
  image: string;
}

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="document-card">
      <div
        className="document-card__image"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${document.image}) lightgray 50% / cover no-repeat`,
        }}
      />
      <div className="document-card__info">
        <div className="document-card__icon">{DocumentIcon}</div>
        <div className="document-card__title">
          <p>{document.title}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
