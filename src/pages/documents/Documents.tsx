import React, { useRef } from "react";
import Header from "../../component/Header/Header";
import VideoBackground from "../../component/Background/VideoBackground";
import Footer from "../../component/Footer/Footer";
import { Polygon } from "../../assets/Icon";
import ArticleDocuments from "../../component/ArtircleDocuments/ArticleDocuments";
import DocumentTable from "../../component/DocumentTable/DocumentTable";
import "./Documents.css";
const Documents: React.FC = () => {
  const documentTableRef = useRef<HTMLDivElement>(null);
  const scrollToDocumentTable = () => {
    if (documentTableRef.current) {
      documentTableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="documents">
      <Header />
      <ArticleDocuments
        scrollToDocumentTable={scrollToDocumentTable}
      ></ArticleDocuments>
      <div ref={documentTableRef}>
        <DocumentTable />
      </div>
      <Footer />
    </div>
  );
};

export default Documents;
