import React from "react";
import ServiceCard from "../serviceCardHome/ServiceCard";
import "./Services.css";

interface Service {
  image: string;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7a69/3777/0d1dc0f4fa04f1ec6fd92cb8552c3d15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEeZ2-K4rvboVPTUO1-DYPCcG3gcYMoM5EPcr7QExFkwvDP1rmXlUbkRATL4P2m4VVVNtDq02ae-72qXeo0xf5~hk1gs-CPA6Uwah9R1thskMFh79zPe9whVPlW61tjg5dPEkxO7Vmx9QFgQ8SMLJp6HhJSUx2Rj6hkZ4demUS-v-V1xMaSjPO5D9bK8VOu-pX8RJ~bdd~ZnPDzSNqRxydhdFT-RC57TFHaRwUrDrA0EQ2gUmMkkZ~qL5h~5vrOPnlOklUuwz122hZZWvYvV8JpD9hmFURMhhQn1V7oKiCqGgMKxk-YTKazeZ80D4-MDmyex~-HG941Kj-7TnFC00A__",
    title: "Vui chơi giải trí",
    description:
      "Với 2 khu giải trí nổi tiếng TPHCM là Công viên văn hóa Đầm Sen, và Khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7a69/3777/0d1dc0f4fa04f1ec6fd92cb8552c3d15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEeZ2-K4rvboVPTUO1-DYPCcG3gcYMoM5EPcr7QExFkwvDP1rmXlUbkRATL4P2m4VVVNtDq02ae-72qXeo0xf5~hk1gs-CPA6Uwah9R1thskMFh79zPe9whVPlW61tjg5dPEkxO7Vmx9QFgQ8SMLJp6HhJSUx2Rj6hkZ4demUS-v-V1xMaSjPO5D9bK8VOu-pX8RJ~bdd~ZnPDzSNqRxydhdFT-RC57TFHaRwUrDrA0EQ2gUmMkkZ~qL5h~5vrOPnlOklUuwz122hZZWvYvV8JpD9hmFURMhhQn1V7oKiCqGgMKxk-YTKazeZ80D4-MDmyex~-HG941Kj-7TnFC00A__",
    title: "Nhà hàng – Khách sạn",
    description:
      "Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao....",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/7a69/3777/0d1dc0f4fa04f1ec6fd92cb8552c3d15?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEeZ2-K4rvboVPTUO1-DYPCcG3gcYMoM5EPcr7QExFkwvDP1rmXlUbkRATL4P2m4VVVNtDq02ae-72qXeo0xf5~hk1gs-CPA6Uwah9R1thskMFh79zPe9whVPlW61tjg5dPEkxO7Vmx9QFgQ8SMLJp6HhJSUx2Rj6hkZ4demUS-v-V1xMaSjPO5D9bK8VOu-pX8RJ~bdd~ZnPDzSNqRxydhdFT-RC57TFHaRwUrDrA0EQ2gUmMkkZ~qL5h~5vrOPnlOklUuwz122hZZWvYvV8JpD9hmFURMhhQn1V7oKiCqGgMKxk-YTKazeZ80D4-MDmyex~-HG941Kj-7TnFC00A__",
    title: "Dịch vụ Lữ hành",
    description:
      "Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra Trung tâm còn thể mạnh là tổ chức...",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services__header">
        <h2 className="services__title">LINH VỰC HOẠT ĐỘNG</h2>
        <h1 className="services__main-title">Các dịch vụ trọng tâm</h1>
        <div className="services__wrap">
          <p className="services__main-title-underline"></p>
        </div>
        <p className="services__description">
          3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng –
          khách sạn, và dịch vụ lữ hành
        </p>
      </div>
      <div className="services__content">
        {servicesData.map((service: Service, index: number) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
