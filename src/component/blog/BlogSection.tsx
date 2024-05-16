import React from "react";
import Card from "../card/Card";
import "./BlogSection.css";

const BlogSection: React.FC = () => {
  const cardsData = [
    {
      image: "https://path/to/image1.jpg",
      title: "Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor",
      description: "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...",
      author: "Admin",
      date: "20/02/2022",
      tags: ["Sự kiện", "Thông báo", "Tin tức"],
      views: "10N",
    },
    {
      image: "https://path/to/image2.jpg",
      title: "Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác Băng Đăng",
      description: "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào giá cạnh tranh Hạng mục Cung cấp nước đá để chế tạo...",
      author: "Admin",
      date: "20/02/2022",
      tags: ["Sự kiện", "Thông báo", "Tin tức"],
      views: "10N",
    },
    {
      image: "https://path/to/image3.jpg",
      title: "Thông báo mời chào hàng cạnh tranh 2 màn hình Led P4 Outdoor Fullcolor",
      description: "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo mời chào hàng cạnh tranh lựa chọn đơn vị Cung cấp, lắp đặt 02 màn hình Led P4...",
      author: "Admin",
      date: "20/02/2022",
      tags: ["Sự kiện", "Thông báo", "Tin tức"],
      views: "10N",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-section__title">CHIA SẺ THÔNG TIN</h2>
      <h1 className="blog-section__main-heading">Bài viết mới</h1>
      <p className="blog-section__description">
        Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch
      </p>
      <div className="blog-section__cards">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <button className="blog-section__button">Xem thêm bài viết</button>
    </section>
  );
};

export default BlogSection;
