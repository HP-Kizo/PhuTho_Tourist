import React, { useState } from "react";
import "./JobApplicationForm.css";
import { File } from "../../assets/Icon";

interface FormData {
  fullName: string;
  birthDate: string;
  currentAddress: string;
  email: string;
  education: string;
  availability: string;
  workHistory: string;
  personalExperience: string;
  gender: string;
  birthPlace: string;
  phone: string;
  facebook: string;
  cv: string;
  partTimeAvailability: string;
}

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    birthDate: "",
    currentAddress: "",
    email: "",
    education: "",
    availability: "",
    workHistory: "",
    personalExperience: "",
    gender: "",
    birthPlace: "",
    phone: "",
    facebook: "",
    cv: "",
    partTimeAvailability: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi dữ liệu lên server
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="wrap__JobApp">
      <h1 className="form-title">Ứng tuyển Online</h1>
      <form className="form-job" onSubmit={handleSubmit}>
        <div className="form__section-top">
          <div className="form__section-left">
            <div className="form__section">
              <label htmlFor="fullName" className="form__label">
                Họ tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form__input"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className="form__section">
              <label htmlFor="birthDate" className="form__label">
                Năm sinh
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                className="form__input"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
            <div className="form__section">
              <label htmlFor="currentAddress" className="form__label">
                Nơi ở hiện nay
              </label>
              <input
                type="text"
                id="currentAddress"
                name="currentAddress"
                className="form__input"
                value={formData.currentAddress}
                onChange={handleChange}
                placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM"
              />
            </div>
            <div className="form__section">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nguyenvana@gmail.com"
              />
            </div>
            <div className="form__section">
              <label htmlFor="education" className="form__label">
                Trình độ
              </label>
              <input
                type="text"
                id="education"
                name="education"
                className="form__input"
                value={formData.education}
                onChange={handleChange}
                placeholder="Đại học"
              />
            </div>
            <div className="form__section">
              <label className="form__label">
                Bạn có sẵn sàng đi công tác dài ngày
              </label>
              <div className="form__radio-group">
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="Có"
                    checked={formData.availability === "Có"}
                    onChange={handleChange}
                  />
                  Có
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="Tùy thời điểm"
                    checked={formData.availability === "Tùy thời điểm"}
                    onChange={handleChange}
                  />
                  Tùy thời điểm
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="Không"
                    checked={formData.availability === "Không"}
                    onChange={handleChange}
                  />
                  Không
                </label>
              </div>
            </div>
          </div>
          <div className="form__section-right">
            <div className="form__section">
              <label className="form__label">Giới tính</label>
              <div className="form__radio-group">
                <div>
                  <label>Nam</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={formData.gender === "Nam"}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Nữ</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={formData.gender === "Nữ"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form__section">
              <label htmlFor="birthPlace" className="form__label">
                Nơi sinh
              </label>
              <input
                type="text"
                id="birthPlace"
                name="birthPlace"
                className="form__input"
                value={formData.birthPlace}
                onChange={handleChange}
                placeholder="Phường 6, Quận Tân Bình, TP HCM"
              />
            </div>
            <div className="form__section">
              <label htmlFor="phone" className="form__label">
                Điện thoại
              </label>
              <div className="phoneNumber">
                <div className="numberPrefix">
                  <div className="flag"></div>
                  <span>+84</span>
                </div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0123456789"
                />
              </div>
            </div>
            <div className="form__section">
              <label htmlFor="facebook" className="form__label">
                Facebook cá nhân
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                className="form__input"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="facebook.com.vn"
              />
            </div>
            <div className="form__section">
              <label className="form__label">Đính kèm CV</label>
              <div className="wrap_fileName">
                <span className="file-upload__file-name">
                  {formData.cv ? formData.cv : "Không có tập tin nào được chọn"}
                </span>
                <label htmlFor="cv" className=" custom-file-upload">
                  {File}
                </label>

                <input
                  type="file"
                  id="cv"
                  name="cv"
                  className="form__input"
                  value={formData.cv}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form__section">
              <label className="form__label">
                Bạn có sẵn sàng làm thêm giờ
              </label>
              <div className="form__radio-group">
                <div className="form__radio-group-1">
                  <label> Có</label>
                  <input
                    type="radio"
                    name="partTimeAvailability"
                    value="Có"
                    checked={formData.partTimeAvailability === "Có"}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__radio-group-2">
                  <label> Tùy thời điểm</label>
                  <input
                    type="radio"
                    name="partTimeAvailability"
                    value="Tùy thời điểm"
                    checked={formData.partTimeAvailability === "Tùy thời điểm"}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__radio-group-3">
                  <label> Không</label>
                  <input
                    type="radio"
                    name="partTimeAvailability"
                    value="Không"
                    checked={formData.partTimeAvailability === "Không"}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form__section-bottom">
          <div className="form__section">
            <label htmlFor="workHistory" className="form__label">
              Những nơi đã từng làm việc trước đây (ghi rõ vị trí)
            </label>
            <textarea
              id="workHistory"
              name="workHistory"
              className="form__textarea"
              value={formData.workHistory}
              onChange={handleChange}
              placeholder="Những nơi đã từng làm việc trước đây"
            ></textarea>
          </div>
          <div className="form__section">
            <label htmlFor="personalExperience" className="form__label">
              Kinh nghiệm bản thân
            </label>
            <textarea
              id="personalExperience"
              name="personalExperience"
              className="form__textarea"
              value={formData.personalExperience}
              onChange={handleChange}
              placeholder="Kinh nghiệm bản thân"
            ></textarea>
          </div>
        </div>
        <div className="wrap-button">
          <button type="submit" className="form__button">
            Gửi ngay
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
