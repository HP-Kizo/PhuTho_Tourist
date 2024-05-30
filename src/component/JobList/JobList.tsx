import React from "react";
import "./JobList.css";
import { ClockS, LogoS, Map, MapS } from "../../assets/Icon";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchJobs } from "../../redux/jobActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const JobList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="jobList">
      {!loading &&
        jobs.slice(0, 9).map((job) => (
          <div key={job.id} className="jobList__item">
            <div className="jobList__position">
              <div className="jobList__position-left">{LogoS}</div>
              <div className="jobList__position-right">
                <h2 className="jobList__title">{job.title}</h2>
                <p className="jobList__position-item">{job.position}</p>
              </div>
            </div>
            <div className="jobList__location">
              <div className="jobList__location-item">
                {MapS}
                <p className="jobList__map">{job.location}</p>
              </div>
              <div className="jobList__location-item">
                {ClockS}
                <p className="jobList__date">{job.date}</p>
              </div>
            </div>
            <span
              className={`jobList__status ${
                job.status === "Đang tuyển"
                  ? "jobList__status--active"
                  : "jobList__status--expired"
              }`}
            >
              {job.status}
            </span>
            <div className="jobList__detail">
              <h1>Mô tả công việc:</h1>
              <p>{job.short_desc}</p>
            </div>
            <button className="jobList__button">Xem chi tiết</button>
          </div>
        ))}
    </div>
  );
};

export default JobList;
