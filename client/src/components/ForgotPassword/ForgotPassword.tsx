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
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Quên mật khẩu</h2>
        <p className="description">
          Vui lòng nhập email hoặc số điện thoại của bạn để khôi phục mật khẩu
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailOrPhone">Email hoặc số điện thoại</label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              placeholder="Nhập email hoặc số điện thoại của bạn"
            />
          </div>
          <button type="submit" className="forgot-password-button">
            Gửi yêu cầu
          </button>
        </form>
        <div className="forgot-password-links">
          <Link to="/login">Quay lại đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 