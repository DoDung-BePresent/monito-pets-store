import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFFDE4] to-[#F9F6FF]">
      <img src="/logo.png" alt="Monito Pets" className="w-16 mb-2" />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Rất vui được gặp lại bạn!
      </h1>
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;