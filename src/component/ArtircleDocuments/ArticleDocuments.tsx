import React from "react";
import "./ArticleDocuments.css";
import {
  ActiveIcon,
  ButtonDown,
  InActiveIcon,
  NextIcon,
  Polygon,
  PrevIcon,
} from "../../assets/Icon";
import DocumentCard from "../DocumentCard/DocumentCard";

interface scrollToDocumentTableProps {
  scrollToDocumentTable: () => void;
}

const ArticleDocuments: React.FC<scrollToDocumentTableProps> = ({
  scrollToDocumentTable,
}) => {
  interface Document {
    id: number;
    title: string;
    year: string;
    image: string;
  }

  const documents: Document[] = [
    {
      id: 1,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/56ad217f26b0f6f855e33e079443d3d665a5e56e",
    },
    {
      id: 2,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/4db6df3950168f9954ab4a9c4241fc0c638e3e66",
    },
    {
      id: 3,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/b73bb116d56872570b5fb6a7562b704096d3e5af",
    },
    {
      id: 4,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/749a23970188e8688677cc178a2d6a276bf85b58",
    },
    {
      id: 5,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/24fccef790262179a2541a541cbebb449df25e3b",
    },
    {
      id: 6,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/f516c0197f7f26e8543cc70b53f6f8b0539d36f8",
    },
    {
      id: 7,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/7400849fb5a5d2b6cadb7b5786b9b10ee2471059",
    },
    {
      id: 8,
      title: "Báo cáo Tài Chính năm 2022-2023",
      year: "2022-2023",
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/589a24d86874120660ebb82396b3b9af80a81a70",
    },
  ];

  return (
    <article className="article__document">
      <div className="wrap__polygon">
        {Polygon}
        <h1 className="polygon__title">TÀI LIỆU</h1>
      </div>
      <div className="wrap__document-card">
        {documents.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
      <div className="button-down" onClick={scrollToDocumentTable}>
        {ButtonDown}
      </div>
    </article>
  );
};

export default ArticleDocuments;
