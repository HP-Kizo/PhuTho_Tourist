// src/components/JobDetails.tsx
import React, { useRef, useState } from "react";
import "./JobDetails.css";
import { Job } from "../../typescripts/Interface";

type JobDetailsProps = {
  jobDetails: Job;
};
const JobDetails: React.FC<JobDetailsProps> = ({ jobDetails }) => {
  return (
    <div className="job-details">
      <div
        className="job-details__image"
        style={{
          backgroundImage: `url(${jobDetails.image})`,
          backgroundColor: "lightgray",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="job-details__main">
        <h1 className="job-details__title">Chi tiết tin tuyển dụng</h1>
        <table className="job-details__table">
          <tbody>
            <tr className="job-details__row">
              <td className="job-details__label">Vị trí</td>
              <td className="job-details__value">{jobDetails.title}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Số lượng</td>
              <td className="job-details__value">{jobDetails.quantity}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Nơi làm việc</td>
              <td className="job-details__value">{jobDetails.workplace}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Địa chỉ làm việc</td>
              <td className="job-details__value">{jobDetails.address}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Mô tả công việc</td>
              <td className="job-details__value">
                <ul className="job-details__desc">
                  {jobDetails.description.map((desc: string, index: number) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Ngày làm việc</td>
              <td className="job-details__value">{jobDetails.workingDays}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Giờ làm việc</td>
              <td className="job-details__value">{jobDetails.workingHours}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Quyền lợi</td>
              <td className="job-details__value">
                <ul className="job-details__desc">
                  {jobDetails.benefits.map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Yêu cầu</td>
              <td className="job-details__value">
                <ul className="job-details__desc">
                  {jobDetails.requirements.map(
                    (requirement: string, index: number) => (
                      <li key={index}>{requirement}</li>
                    )
                  )}
                </ul>
              </td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Độ tuổi</td>
              <td className="job-details__value">{jobDetails.age} tuổi</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Trình độ</td>
              <td className="job-details__value">{jobDetails.lever}</td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Hồ sơ gồm</td>
              <td className="job-details__value">
                <ul className="job-details__desc">
                  {jobDetails.includes.map((include: string, index: number) => (
                    <li key={index}>{include}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobDetails;
