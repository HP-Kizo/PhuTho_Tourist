import { useEffect, useRef, useState } from "react";

import { ClockS, DamSenPark, Map } from "../../assets/Icon";
import VideoBackground from "../Background/VideoBackground";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import JobDetails from "../JobDetails/JobDetails";
import "./careersDetail.css";
import JobApplicationForm from "../JobApplicationForm/JobApplicationForm";
import { useLocation } from "react-router-dom";

const CareersDetail: React.FC = () => {
  // const [jobsHeight, setJobsHeight] = useState<number>(0);
  // const jobsRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (jobsRef.current) {
  //     setJobsHeight(jobsRef.current.clientHeight + 168 - 1080);
  //   }
  // }, []);
  const location = useLocation();
  const jobDetails = location.state?.job;
  console.log(!jobDetails);

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

  // const jobDetails = {
  //   id: 1,
  //   image:
  //     "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/8651727b0f2b228ece2a6357eab8da796ed97cc6",
  //   title: "Nhân viên thiết kế đồ họa",
  //   position: "Nhân viên chính thức",
  //   status: "Đang tuyển",
  //   quantity: "02 người",
  //   workplace: "CVVH Đầm Sen",
  //   date: "2024-06-01",
  //   address: "3 Hòa Bình, Phường 3, Quận 11, TP.HCM",
  //   field: "Thiết kế",
  //   form: "Nhân viên chính thức",
  //   place: "CVVH Đầm Sen",
  //   short_desc:
  //     "Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...",
  //   description: [
  //     "Thiết kế hành ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại vé mới ... và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.",
  //     "Chụp hình, quay phim, dựng video đơn giản.",
  //     "Lên ý tưởng, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.",
  //     "Các chi tiết về công việc được trao đổi tại buổi phỏng vấn.",
  //   ],
  //   workingDays: "...",
  //   workingHours: "Giờ hành chính",
  //   benefits: [
  //     "Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.",
  //     "Thưởng tháng 13, 14, các ngày lễ, tết trong năm.",
  //     "Được phục vụ bữa ăn trưa tại nơi làm việc.",
  //     "Được trang bị đồng phục, khám sức khỏe định kỳ hằng năm.",
  //     "Được tham gia Bảo hiểm tai nạn 24/24.",
  //     "Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.",
  //     "Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.",
  //     "Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự giàu kinh nghiệm, nhiệt huyết.",
  //     "Các chế độ khác: Quà sinh nhật, cưới hỏi, ốm đau, thai sản, trung thu, quà Tết, quà thiếu nhi 1/6.",
  //     "Thăm hỏi ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ, hoạt động văn thể mỹ hằng năm.",
  //   ],
  //   requirements: [
  //     "Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa...",
  //     "Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator...).",
  //     "Có khả năng quay và dựng video hấp dẫn người xem.",
  //     "Sử dụng thành thạo máy ảnh, máy quay, flycam...",
  //     "Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.",
  //     "Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh của Công ty.",
  //   ],
  //   age: "22-27",
  //   lever: "Cao đẳng",
  //   includes: [
  //     "Thông tin ứng tuyển:",
  //     "Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.",
  //     "Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15, Quận 11.",
  //     "(ĐT: 028 38 650 921  - Phòng Nhân sự).",
  //   ],
  // };

  return (
    <div className="careers__component">
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
