import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: LoginFormData) => {
    try {
      await login({ email: values.email, password: values.password });
      message.success('Đăng nhập thành công!');
      navigate('/');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Email hoặc mật khẩu không đúng!';
      message.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xs w-full p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8 text-[#4A90E2]">
          Đăng nhập vào Monito Pets
        </h2>
        
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' }
            ]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400" />} 
              placeholder="Email" 
              className="rounded-lg h-12 w-64 mx-auto"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Mật khẩu"
              className="rounded-lg h-12 w-64 mx-auto"
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              </Form.Item>
              <Link to="/forgot-password" className="text-[#4A90E2] hover:text-[#357ABD]">
                Quên mật khẩu?
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full bg-[#4A90E2] hover:bg-[#357ABD] h-12 rounded-lg text-base font-medium"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center">
            <span className="text-gray-600">Chưa có tài khoản? </span>
            <Link to="/signup" className="text-[#4A90E2] hover:text-[#357ABD] font-medium">
              Đăng ký ngay
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm; 