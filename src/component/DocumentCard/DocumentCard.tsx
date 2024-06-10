import React from "react";
import "./DocumentCard.css";
import { DocumentIcon } from "../../assets/Icon";
import { Reports } from "../../typescripts/Interface";

interface DocumentCardProps {
  report: Reports;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ report }) => {
  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "filename.ext");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="document-card"
      onClick={() => handleDownload(report.fileUrl)}
    >
      <div
        className="document-card__image"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${report.image}) lightgray 50% / cover no-repeat`,
        }}
      />
      <div className="document-card__info">
        <div className="document-card__icon">{DocumentIcon}</div>
        <div className="document-card__title">
          <p>{report.title}</p>
        </div>
      </div>
      <div className="document-card__hover">Click để xem</div>
    </div>
  );
};

export default DocumentCard;
