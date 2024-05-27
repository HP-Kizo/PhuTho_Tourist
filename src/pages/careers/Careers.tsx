import { Polygon, VectorBlue } from "../../assets/Icon";
import FilterCareers from "../../component/FilterCareers/FilterCareers";
import JobList from "../../component/JobList/JobList";
import SearchBar from "../../component/SearchBar/SearchBar";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import "./Careers.css";
const Careers: React.FC = () => {
  return (
    <div className="careers">
      <Header></Header>
      <div className="careers__content">
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
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Careers;
