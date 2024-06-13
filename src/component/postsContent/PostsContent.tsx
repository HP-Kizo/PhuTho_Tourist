import React from "react";
import "./PostsContent.css";
import { useLocation } from "react-router-dom";
const PostsContent = () => {
  const location = useLocation();
  const posts = location.state?.post;

  // const posts = {
  //   title: "Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022",
  //   author: "by tuyendung in on Tháng Năm 21, 2020",
  //   image:
  //     "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/19313fbf54515f37aa3b31db6ea91eddad520eee",
  //   file: "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/5ee014118a74a00f7a78c772e1cebe3cd427cf14",
  //   content: {
  //     intro:
  //       "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị tham gia đấu giá cạnh tranh hạng mục...",
  //     auctionDetails: [
  //       "Tên hạng mục đấu giá: Hợp tác giữ xe 02 – 04 bánh.",
  //       "Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế GTGT).",
  //       "Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ...",
  //       "Địa điểm thực hiện: Công viên văn hóa Đầm Sen.",
  //       "Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh",
  //     ],
  //     result: {
  //       selectedCompany: "Công ty TNHH Thương mại Dịch vụ Hai Tấm Sáu...",
  //       price: "13.500.000.000 đồng (đã gồm thuế GTGT)",
  //       ranking: "Xếp hạng hồ sơ: Hạng 1",
  //       contract:
  //         "Loại hợp đồng: Hợp đồng hợp tác kinh doanh - Thời gian thực hiện hợp đồng: 03 năm",
  //     },
  //     notice: "Đề nghị Công ty TNHH TMDV Hai Tấm Sáu trong vòng 02 ngày...",
  //   },
  // };

  return (
    <>
      {posts ? (
        <div className="posts__item">
          <div className="posts__header">
            <h1 className="posts__title">{posts.title}</h1>
            <p className="posts__by">by tuyendung in on</p>
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
              <h1>{posts.content.intro}</h1>
              <ul>
                {/* {posts.content.auctionDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))} */}
              </ul>
              <div>
                <h2>Kết quả lựa chọn đơn vị:</h2>
                <ul>
                  <li>{posts.content.result.selectedCompany}</li>
                  <li>{posts.content.result.price}</li>
                  <li>{posts.content.result.ranking}</li>
                  <li>{posts.content.result.contract}</li>
                </ul>
              </div>
              <div>{posts.content.notice}</div>
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostsContent;
