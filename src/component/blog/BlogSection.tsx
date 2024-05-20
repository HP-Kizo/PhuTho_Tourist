import React from "react";
import Card from "../card/Card";
import "./BlogSection.css";

const BlogSection: React.FC = () => {
  const cardsData = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7a69/3777/0d1dc0f4fa04f1ec6fd92cb8552c3d15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEeZ2-K4rvboVPTUO1-DYPCcG3gcYMoM5EPcr7QExFkwvDP1rmXlUbkRATL4P2m4VVVNtDq02ae-72qXeo0xf5~hk1gs-CPA6Uwah9R1thskMFh79zPe9whVPlW61tjg5dPEkxO7Vmx9QFgQ8SMLJp6HhJSUx2Rj6hkZ4demUS-v-V1xMaSjPO5D9bK8VOu-pX8RJ~bdd~ZnPDzSNqRxydhdFT-RC57TFHaRwUrDrA0EQ2gUmMkkZ~qL5h~5vrOPnlOklUuwz122hZZWvYvV8JpD9hmFURMhhQn1V7oKiCqGgMKxk-YTKazeZ80D4-MDmyex~-HG941Kj-7TnFC00A__",
      title:
        "Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor",
      description:
        "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...",
      author: "Admin",
      date: "20/02/2022",
      views: "10N",
    },
    {
      image:
        "https://www.figma.com/file/V1jfJlagJd7Ufsl4wRs43c/image/46f2f67e3578e491dbbdfabc94340d118bccdb39",
      title:
        "Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác Băng Đăng",
      description:
        "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào giá cạnh tranh Hạng mục Cung cấp nước đá để chế tạo...",
      author: "Admin",
      date: "20/02/2022",
      views: "10N",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7a69/3777/0d1dc0f4fa04f1ec6fd92cb8552c3d15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEeZ2-K4rvboVPTUO1-DYPCcG3gcYMoM5EPcr7QExFkwvDP1rmXlUbkRATL4P2m4VVVNtDq02ae-72qXeo0xf5~hk1gs-CPA6Uwah9R1thskMFh79zPe9whVPlW61tjg5dPEkxO7Vmx9QFgQ8SMLJp6HhJSUx2Rj6hkZ4demUS-v-V1xMaSjPO5D9bK8VOu-pX8RJ~bdd~ZnPDzSNqRxydhdFT-RC57TFHaRwUrDrA0EQ2gUmMkkZ~qL5h~5vrOPnlOklUuwz122hZZWvYvV8JpD9hmFURMhhQn1V7oKiCqGgMKxk-YTKazeZ80D4-MDmyex~-HG941Kj-7TnFC00A__",
      title:
        "Thông báo mời chào hàng cạnh tranh 2 màn hình Led P4 Outdoor Fullcolor",
      description:
        "Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo mời chào hàng cạnh tranh lựa chọn đơn vị Cung cấp, lắp đặt 02 màn hình Led P4...",
      author: "Admin",
      date: "20/02/2022",
      views: "10N",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-section__haeder">
        <h2 className="blog-section__title">CHIA SẺ THÔNG TIN</h2>
        <h1 className="blog-section__main-heading">Bài viết mới</h1>
        <div className="blog-section__wrap">
          <p className="blog-section__main-heading-underline"></p>
        </div>
        <p className="blog-section__description">
          Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về
          những sản phẩm du lịch
        </p>
      </div>
      <div className="blog-section__cards">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="blog-section__footer">
        <button className="blog-section__button">Xem thêm bài viết</button>
      </div>
    </section>
  );
};

export default BlogSection;
