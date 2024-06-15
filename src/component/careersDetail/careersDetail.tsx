import { useEffect, useRef, useState } from "react";

import { ClockS, DamSenPark, Map } from "../../assets/Icon";
import VideoBackground from "../Background/VideoBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JobDetails from "../JobDetails/JobDetails";
import "./careersDetail.css";
import JobApplicationForm from "../JobApplicationForm/JobApplicationForm";
import { useLocation, useParams } from "react-router-dom";

const CareersDetail: React.FC = () => {
  // const [jobsHeight, setJobsHeight] = useState<number>(0);
  // const jobsRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (jobsRef.current) {
  //     setJobsHeight(jobsRef.current.clientHeight + 168 - 1080);
  //   }
  // }, []);
  const params = useParams();
  const careerRef = useRef<HTMLDivElement>(null);
  const scrollTocareer = () => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollTocareer();
  }, [params]);
  const location = useLocation();
  const jobDetails = location.state?.job;

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
    <div className="careers__component" ref={careerRef}>
      <Header></Header>

      {jobDetails ? (
        <div className="careers-detail">
          <div className="wrap__careers">
            <div className="careers__detail">
              <div className="careers__header">
                <div className="careers__header-image">{DamSenPark}</div>
                <div className="careers__header-content">
                  <h1>{jobDetails.title}</h1>
                  <p>{jobDetails.position}</p>
                  <div className="careers__header-position">
                    <div>
                      {Map}
                      <span>{jobDetails.workplace}</span>
                    </div>
                    <div>
                      {ClockS}
                      <span>{formatDateToRelativeWeeks(jobDetails.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  jobDetails.status === "Đang tuyển"
                    ? "careers__status"
                    : "careers__status expired"
                }
              >
                <p>{jobDetails.status}</p>
              </div>
            </div>
            <JobDetails jobDetails={jobDetails}></JobDetails>
            <JobApplicationForm></JobApplicationForm>{" "}
          </div>
        </div>
      ) : (
        <div className="wrap__careers">Không tìm thấy thông tin công việc</div>
      )}

      <Footer></Footer>
    </div>
  );
};
export default CareersDetail;
