import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({
      emailOrPhone: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic
    console.log('Forgot password data:', formData);
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password__box">
        <h2 className="forgot-password__title">Quên mật khẩu</h2>
        <p className="forgot-password__description">
          Vui lòng nhập email hoặc số điện thoại của bạn để khôi phục mật khẩu
        </p>
        <form className="forgot-password__form" onSubmit={handleSubmit}>
          <div className="forgot-password__form-group">
            <label className="forgot-password__label" htmlFor="emailOrPhone">
              Email hoặc số điện thoại
            </label>
            <input
              className="forgot-password__input"
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              placeholder="Nhập email hoặc số điện thoại của bạn"
            />
          </div>
          <button type="submit" className="forgot-password__button">
            Gửi yêu cầu
          </button>
        </form>
        <div className="forgot-password__links">
          <Link className="forgot-password__link" to="/login">
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 