import React from "react";
import "./JobList.css";
import { ClockS, LogoS, Map, MapS } from "../../assets/Icon";

const jobs = [
  // Sample job data
  {
    id: 1,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đang tuyển",
  },
  {
    id: 2,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 3,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 4,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 5,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 6,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 7,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 8,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  {
    id: 9,
    title: "Nhân viên thiết kế đồ họa",
    position: "Nhân viên chính thức",
    short_desc:
      "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
    location: "CVVH Đầm Sen",
    date: "2 tuần trước",
    status: "Đã hết hạn",
  },
  // Add more job data as needed
];

const JobList: React.FC = () => {
  return (
    <div className="jobList">
      {jobs.map((job) => (
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
