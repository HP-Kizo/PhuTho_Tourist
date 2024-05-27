import { useEffect, useRef, useState } from "react";

import { DamSenPark, Map } from "../../assets/Icon";
import VideoBackground from "../../component/background/VideoBackground";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import JobDetails from "../../component/jobDetails/JobDetails";
import "./Careers.css";
import JobApplicationForm from "../../component/JobApplicationForm/JobApplicationForm";

const Careers: React.FC = () => {
  const [jobsHeight, setJobsHeight] = useState<number>(0);
  const jobsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (jobsRef.current) {
      setJobsHeight(jobsRef.current.clientHeight + 168 - 1080);
    }
  }, []);
  const jobDetails = {
    id: 1,
    image:
      "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/8651727b0f2b228ece2a6357eab8da796ed97cc6",
    title: "Chi tiết tin tuyển dụng",
    position: "Nhân viên thiết kế đồ họa",
    quantity: "02 người",
    workplace: "Công viên văn hóa Đầm Sen",
    address: "3 Hòa Bình, Phường 3, Quận 11, TP.HCM",
    jobDescription: [
      "Thiết kế hành ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại vé mới ... và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.",
      "Chụp hình, quay phim, dựng video đơn giản.",
      "Lên ý tưởng, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.",
      "Các chi tiết về công việc được trao đổi tại buổi phỏng vấn.",
    ],
    workingDays: "...",
    workingHours: "Giờ hành chính",
    benefits: [
      "Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.",
      "Thưởng tháng 13, 14, các ngày lễ, tết trong năm.",
      "Được phục vụ bữa ăn trưa tại nơi làm việc.",
      "Được trang bị đồng phục, khám sức khỏe định kỳ hằng năm.",
      "Được tham gia Bảo hiểm tai nạn 24/24.",
      "Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.",
      "Được tham gia miễn phí các khóa đào tạo nâng cao nghiệp vụ.",
      "Môi trường làm việc thân thiện, nhiều cơ hội học hỏi từ đội ngũ quản lý, nhân sự giàu kinh nghiệm, nhiệt huyết.",
      "Các chế độ khác: Quà sinh nhật, cưới hỏi, ốm đau, thai sản, trung thu, quà Tết, quà thiếu nhi 1/6.",
      "Thăm hỏi ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ, hoạt động văn thể mỹ hằng năm.",
    ],
    requirements: [
      "Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa...",
      "Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator...).",
      "Có khả năng quay và dựng video hấp dẫn người xem.",
      "Sử dụng thành thạo máy ảnh, máy quay, flycam...",
      "Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.",
      "Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh của Công ty.",
    ],
    age: "22-27",
    lever: "Cao đẳng",
    includes: [
      "Thông tin ứng tuyển:",
      "Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.",
      "Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15, Quận 11.",
      "(ĐT: 028 38 650 921  - Phòng Nhân sự).",
    ],
  };
  return (
    <div className="careers__component">
      <Header></Header>
      <div className="wrap__careers" ref={jobsRef}>
        <div className="careers">
          <div className="careers__header">
            <div className="careers__header-image">{DamSenPark}</div>
            <div className="careers__header-content">
              <h1>Nhân viên thiết kế đồ họa</h1>
              <p>Nhân viên chính thức</p>
              <div className="careers__header-position">
                <div>
                  {Map}
                  <span>CVVH Đầm Sen</span>
                </div>
                <span>2 tuần trước</span>
              </div>
            </div>
          </div>
          <div className="careers__status">
            <p>Đang tuyển</p>
          </div>
          {/* <div className="careers__status expired">
              <p>Đã hết hạn</p>
            </div> */}
        </div>
        <JobDetails jobDetails={jobDetails}></JobDetails>
        <JobApplicationForm></JobApplicationForm>
      </div>
      <div style={{ height: `${jobsHeight}px` }}></div>
      <Footer></Footer>
    </div>
  );
};
export default Careers;
