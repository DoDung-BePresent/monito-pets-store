import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement register logic
    console.log('Register data:', formData);
  };

  return (
    <div className="register">
      <div className="register__box">
        <h2 className="register__title">Đăng ký tài khoản</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-group">
            <label className="register__label" htmlFor="fullName">
              Họ và tên
            </label>
            <input
              className="register__input"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label" htmlFor="email">
              Email
            </label>
            <input
              className="register__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Nhập email của bạn"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label" htmlFor="phone">
              Số điện thoại
            </label>
            <input
              className="register__input"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              className="register__input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label" htmlFor="confirmPassword">
              Xác nhận mật khẩu
            </label>
            <input
              className="register__input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Nhập lại mật khẩu của bạn"
            />
          </div>
          <button type="submit" className="register__button">
            Đăng ký
          </button>
        </form>
        <div className="register__links">
          <span className="register__text">Đã có tài khoản?</span>
          <Link className="register__link" to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 