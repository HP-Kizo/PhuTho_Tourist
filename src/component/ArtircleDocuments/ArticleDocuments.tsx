import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchDocuments } from "../../redux/documentAction";

interface scrollToDocumentTableProps {
  scrollToDocumentTable: () => void;
}

const ArticleDocuments: React.FC<scrollToDocumentTableProps> = ({
  scrollToDocumentTable,
}) => {
  const dispatch = useAppDispatch();
  const { reports, loading, error } = useSelector(
    (state: RootState) => state.documents
  );


  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  return (
    <article className="article__document">
      <div className="wrap__polygon">
        {Polygon}
        <h1 className="polygon__title">TÀI LIỆU</h1>
      </div>
      <div className="wrap__document-card">
        {!loading &&
          reports.map((report) => (
            <DocumentCard key={report.id} report={report} />
          ))}
      </div>
      <div className="button-down" onClick={scrollToDocumentTable}>
        {ButtonDown}
      </div>
    </article>
  );
};

export default ArticleDocuments;
