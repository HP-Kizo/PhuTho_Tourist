import React from "react";
import "./JobList.css";
import { ClockS, LogoS, MapS } from "../../assets/Icon";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchJobs } from "../../redux/jobActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Job } from "../../typescripts/Interface";
import { useNavigate } from "react-router-dom";

interface JobListProps {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const JobList: React.FC<JobListProps> = ({ jobs, loading, error }) => {
  const navigate = useNavigate();
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  function formatDateToRelativeWeeks(date: string): string {
    const rtf = new Intl.RelativeTimeFormat("vi", {
      numeric: "auto",
    });

    const now = new Date();
    const targetDate = new Date(date);

    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksDifference = Math.floor(
      (targetDate.getTime() - now.getTime()) / millisecondsPerWeek
    );

    return rtf.format(weeksDifference, "week");
  }
  return (
    <div className="jobList">
      {jobs.map((job: Job) => (
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
              <p className="jobList__map">{job.workplace}</p>
            </div>
            <div className="jobList__location-item">
              {ClockS}
              <p className="jobList__date">
                {formatDateToRelativeWeeks(job.date)}
              </p>
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
          <button
            className="jobList__button button__hover"
            onClick={() => {
              navigate(`${job.id}`, { state: { job } });
            }}
          >
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
