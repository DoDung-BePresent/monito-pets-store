import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // TODO: Implement login logic
    console.log('Login data:', formData);
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2 className="login__title">Đăng nhập</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label className="login__label" htmlFor="email">
              Email
            </label>
            <input
              className="login__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Nhập email của bạn"
            />
          </div>
          <div className="login__form-group">
            <label className="login__label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              className="login__input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Nhập mật khẩu của bạn"
            />
          </div>
          <button type="submit" className="login__button">
            Đăng nhập
          </button>
        </form>
        <div className="login__links">
          <Link className="login__link" to="/forgot-password">
            Quên mật khẩu?
          </Link>
          <Link className="login__link" to="/register">
            Đăng ký tài khoản mới
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 