import React from "react";
import Header from "../../component/header/Header";
import VideoBackground from "../../component/background/VideoBackground";
import Footer from "../../component/footer/Footer";
import { Polygon } from "../../assets/Icon";
import ArticleDocuments from "../../component/ArtircleDocuments/ArticleDocuments";
import DocumentTable from "../../component/DocumentTable/DocumentTable";

const Documents: React.FC = () => {
  return (
    <>
      <Header />
      <VideoBackground>
        <ArticleDocuments></ArticleDocuments>
      </VideoBackground>
      <DocumentTable />
      <Footer />
    </>
  );
};

export default Documents;
