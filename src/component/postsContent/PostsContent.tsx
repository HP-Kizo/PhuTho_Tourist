import React from "react";
import "./PostsContent.css";
const PostsContent = () => {
  const posts = {
    title: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
    author: "by tuyendung in on Tháng Năm 21, 2020",
    image:
      "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/19313fbf54515f37aa3b31db6ea91eddad520eee",
    file: "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/5ee014118a74a00f7a78c772e1cebe3cd427cf14",
  };
  return (
    <>
      <div className="posts__header">
        <h1 className="posts__title">{posts.title}</h1>
        <p className="posts__by">{posts.author}</p>
      </div>
      <div className="posts__content">
        <div
          className="posts__image"
          style={{
            backgroundImage: `url(${posts.image})`,
            backgroundColor: "lightgray",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="posts__main">
          <h1>
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị
            tham gia đấu giá cạnh tranh hạng mục...
          </h1>
          <ul className="posts__details">
            <li>Tên hạng mục đấu giá: Hợp tác giữ xe 02 – 04 bánh.</li>
            <li>
              Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế
              GTGT).
            </li>
            <li>Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ...</li>
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
                Loại hợp đồng: Hợp đồng hợp tác kinh doanh - Thời gian thực hiện
                hợp đồng: 03 năm
              </li>
            </ul>
          </div>
          <div className="posts__notice">
            Đề nghị Công ty TNHH TMDV Hai Tấm Sáu trong vòng 02 ngày...
          </div>
        </div>
        <div
          className="posts__file"
          style={{
            backgroundImage: `url(${posts.file})`,
            backgroundColor: "lightgray",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </>
  );
};

export default PostsContent;
