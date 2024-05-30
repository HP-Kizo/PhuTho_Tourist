import { useEffect, useRef, useState } from "react";
import { Polygon, VectorBlue } from "../../assets/Icon";
import FilterCareers from "../../component/FilterCareers/FilterCareers";
import JobList from "../../component/JobList/JobList";
import SearchBar from "../../component/SearchBar/SearchBar";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import "./Careers.css";

const Careers: React.FC = () => {
  const [careersHeight, setCareersHeight] = useState<number>(0);
  const careersRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (careersRef.current) {
      setCareersHeight(careersRef.current.clientHeight - 1080 + 168);
    }
  }, []);
  return (
    <div className="careers">
      <Header></Header>
      <div className="careers__content" ref={careersRef}>
        <div className="careers__polygon">
          {Polygon}
          <h1 className="polygon__title">TUYỂN DỤNG</h1>
        </div>
        <div className="careers__content-main">
          <div className="careers__content-filter">
            <SearchBar></SearchBar>
            {VectorBlue}
            <FilterCareers></FilterCareers>
          </div>
          <div className="careers__content-jobList">
            <JobList></JobList>
          </div>
        </div>
      </div>
      <div style={{ height: `${careersHeight}px` }}></div>
      <Footer></Footer>
    </div>
  );
};

export default Careers;
