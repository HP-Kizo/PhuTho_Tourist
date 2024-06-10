import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchJobs } from "../../redux/jobActions";
import { Polygon, VectorBlue } from "../../assets/Icon";
import FilterCareers from "../../component/FilterCareers/FilterCareers";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import "./Careers.css";
import SearchBar from "../../component/SearchBar/SearchBar";
import JobList from "../../component/JobList/JobList";
import Pagination from "../../component/Pagination/Pagination";

const Careers: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [careersHeight, setCareersHeight] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);

  const careersRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  const updateWidth = () => {
    if (careersRef.current) {
      setWidth(careersRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    // Cập nhật width lần đầu khi component mount
    updateWidth();

    // Thêm event listener khi component mount
    window.addEventListener("resize", updateWidth);

    // Loại bỏ event listener khi component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    if (width < 1519) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(9);
    }
  }, [width]);
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleFilterChange = (field: string, value: string) => {
    if (field === "field") setSelectedField(value);
    if (field === "form") setSelectedForm(value);
    if (field === "place") setSelectedPlace(value);
  };

  const filteredJobs = jobs
    .filter((job) =>
      job.title.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .filter((job) => (selectedField ? job.field === selectedField : true))
    .filter((job) => (selectedForm ? job.form === selectedForm : true))
    .filter((job) => (selectedPlace ? job.place === selectedPlace : true));

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleResetFilters = () => {
    setSelectedField("");
    setSelectedForm("");
    setSelectedPlace("");
    setSearchKeyword("");
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedField, selectedForm, selectedPlace, searchKeyword]);

  return (
    <div className="careers" ref={careersRef}>
      <Header />
      <div className="careers__content">
        <div className="careers__polygon">
          {Polygon}
          <h1 className="polygon__title">TUYỂN DỤNG</h1>
        </div>
        <div className="careers__content-main">
          <FilterCareers
            searchKeyword={searchKeyword}
            onSearchChange={handleSearchChange}
            selectedField={selectedField}
            selectedForm={selectedForm}
            selectedPlace={selectedPlace}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
          <div className="careers__content-jobList">
            <JobList jobs={paginatedJobs} loading={loading} error={error} />
            {totalPages > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
