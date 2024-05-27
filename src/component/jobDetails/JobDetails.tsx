// src/components/JobDetails.tsx
import React, { useRef, useState } from "react";
import "./JobDetails.css";

type JobDetailsProps = {
  jobDetails: {
    id: number;
    image: string;
    title: string;
    position: string;
    quantity: string;
    workplace: string;
    address: string;
    jobDescription: string[];
    workingDays: string;
    workingHours: string;
    benefits: string[];
    requirements: string[];
    age: string;
    lever: string;
    includes: string[];
  };
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
        <h1 className="job-details__title">{jobDetails.title}</h1>
        <table className="job-details__table">
          <tbody>
            <tr className="job-details__row">
              <td className="job-details__label">Vị trí</td>
              <td className="job-details__value">{jobDetails.position}</td>
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
                  {jobDetails.jobDescription.map((desc, index) => (
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
                  {jobDetails.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="job-details__row">
              <td className="job-details__label">Yêu cầu</td>
              <td className="job-details__value">
                <ul className="job-details__desc">
                  {jobDetails.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
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
                  {jobDetails.includes.map((include, index) => (
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
