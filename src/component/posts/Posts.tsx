import React from "react";
import "./Posts.css";
import Header from "../header/Header";
import VideoBackground from "../background/VideoBackground";

const Posts: React.FC = () => {
  return (
    <>
      <Header></Header>
      <VideoBackground>
        <div className="posts">
          <div className="posts__header">
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị
            tham gia đấu giá cạnh tranh hạng mục...
          </div>
          <div className="posts__content">
            <ul className="posts__details">
              <li>Tên hạng mục đấu giá: Hợp tác giữ xe 02 – 04 bánh.</li>
              <li>
                Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm
                thuế GTGT).
              </li>
              <li>
                Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ...
              </li>
              <li>Địa điểm thực hiện: Công viên văn hóa Đầm Sen.</li>
              <li>Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh</li>
            </ul>
            <div className="posts__selection">
              Kết quả lựa chọn đơn vị:
              <ul className="posts__selection-details">
                <li>Công ty TNHH Thương mại Dịch vụ Hai Tấm Sáu...</li>
                <li>Giá tham gia: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                <li>Xếp hạng hồ sơ: Hạng 1</li>
                <li>
                  Loại hợp đồng: Hợp đồng hợp tác kinh doanh - Thời gian thực
                  hiện hợp đồng: 03 năm
                </li>
              </ul>
            </div>
            <div className="posts__notice">
              Đề nghị Công ty TNHH TMDV Hai Tấm Sáu trong vòng 02 ngày...
            </div>
          </div>
        </div>
      </VideoBackground>
    </>
  );
};

export default Posts;
