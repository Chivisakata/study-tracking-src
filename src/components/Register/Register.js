import React from 'react';
import './Register.css';

function Register({ onSwitchPage }) {
  return (
    <div className="register-container">
      {/* Khu vực Tiêu đề / Brand */}
      <div class="register-header">
        <div className="logo-icon">🚀</div>
        <h2>Gia Nhập Học Viện</h2>
        <p>Tạo tài khoản để bắt đầu thiết lập đế chế tri thức của riêng bạn.</p>
      </div>

      {/* Form Đăng Ký */}
      {/* TODO: Bạn hãy tự thêm onSubmit={handleRegister} vào đây khi học đến Logic */}
      <form className="register-form">
        
        {/* Ô nhập Họ và Tên */}
        <div className="input-group">
          <label htmlFor="fullname">Họ và Tên</label>
          <div className="input-wrapper">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            {/* TODO: Thêm value và onChange */}
            <input 
              type="text" 
              id="fullname" 
              placeholder="Nhập họ và tên của bạn..." 
              required 
            />
          </div>
        </div>

        {/* Ô nhập Email */}
        <div className="input-group">
          <label htmlFor="email">Địa chỉ Email</label>
          <div className="input-wrapper">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {/* TODO: Thêm value và onChange */}
            <input 
              type="email" 
              id="email" 
              placeholder="viethao@example.com" 
              required 
            />
          </div>
        </div>

        {/* Ô nhập Mật khẩu */}
        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <div className="input-wrapper">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            {/* TODO: Thêm value và onChange */}
            <input 
              type="password" 
              id="password" 
              placeholder="Tối thiểu 6 ký tự..." 
              required 
            />
          </div>
        </div>

        {/* Ô nhập Lại Mật khẩu */}
        <div className="input-group">
          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <div className="input-wrapper">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
            {/* TODO: Thêm value và onChange */}
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Nhập lại mật khẩu giống phía trên..." 
              required 
            />
          </div>
        </div>

        {/* Đồng ý điều khoản */}
        <div className="terms-agree">
          <input type="checkbox" id="agree" required />
          <label htmlFor="agree">Tôi đồng ý với các điều khoản học tập nghiêm túc 🎯</label>
        </div>

        {/* Nút Đăng ký */}
        <button type="submit" className="btn-register">
          Tạo Tài Khoản
          <svg className="btn-arrow-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

      </form>

      {/* Quay lại Đăng nhập */}
      <div className="register-footer">
        <span>Đã có tài khoản rồi?</span>
        <a 
            href="#" 
            className="login-link"
            onClick={(e) => {
            e.preventDefault(); 
            onSwitchPage(); // Bấm vào để quay lại trang Login
            }}
        >
            Quay lại đăng nhập
        </a>
        </div>
    </div>
  );
}

export default Register;