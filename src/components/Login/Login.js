import React from 'react'
import './Login.css'

export default function Login({ onSwitchPage }) {
  return (
    <div className="login-container">
      {/* 
        Khu vực Tiêu đề / Brand
        Đã chuyển đổi chú thích sang chuẩn JSX bằng dấu ngoặc nhọn và /* 
      */}
      <div className="login-header">
        <div className="logo-icon">⚡</div>
        <h2>Chào Hiệp Sĩ Học Tập!</h2>
        <p>Đăng nhập để tiếp tục cày cuốc tiến độ hôm nay nào.</p>
      </div>

      {/* 
        Form Đăng Nhập
        Sau này bạn có thể tự thêm xử lý sự kiện handleSubmit tại đây: onSubmit={handleSubmit}
      */}
      <form className="login-form">
        
        {}
        {/* Ô nhập Tài khoản / Email */}
        <div className="input-group">
          {/* Sửa 'for' thành 'htmlFor' */}
          <label htmlFor="username">Tài khoản hoặc Email</label>
          <div className="input-wrapper">
            <i className="fa-regular fa-user input-icon"></i>
            {/* 
              Trong React, bắt buộc phải có dấu gạch chéo tự đóng ở cuối thẻ <input />
              Sau này bạn hãy tự thêm value={username} và onChange={handleUsernameChange} vào đây nhé!
            */}
            <input 
              type="text" 
              id="username" 
              placeholder="Nhập tài khoản của bạn..." 
              required 
            />
          </div>
        </div>

        {}
        {/* Ô nhập Mật khẩu */}
        <div className="input-group">
          <div className="label-wrapper">
            {/* Sửa 'for' thành 'htmlFor' */}
            <label htmlFor="password">Mật khẩu</label>
            <a href="#" className="forgot-link">Quên mật khẩu?</a>
          </div>
          <div className="input-wrapper">
            <i className="fa-regular fa-lock input-icon"></i>
            {/* Thêm dấu gạch chéo tự đóng /> ở cuối thẻ input */}
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
            />
          </div>
        </div>

        {}
        {/* Ghi nhớ đăng nhập */}
        <div className="remember-me">
          {/* Thêm dấu gạch chéo tự đóng /> ở cuối thẻ input */}
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Ghi nhớ tôi trên thiết bị này</label>
        </div>

        {/* Nút Đăng nhập */}
        <button type="submit" className="btn-login">
          Bắt Đầu Học <i className="fa-solid fa-arrow-right"></i>
        </button>

      </form>

       {/* Chuyển sang Đăng ký */}
      <div className="login-footer">
        <span>Chưa có tài khoản?</span>{' '}
        <span>Chưa có tài khoản?</span>{' '}
        {/* Khi bấm vào, chiếc công tắc sẽ chuyển trạng thái để hiện trang Register */}
        <a 
            href="#" 
            className="register-link"
            onClick={(e) => {
            e.preventDefault(); // Chặn không cho trình duyệt load lại trang
            onSwitchPage();     // Kích hoạt hàm chuyển trang truyền từ App.js xuống
            }}
        >
        Tạo tài khoản mới
        </a>
      </div>
    </div>
  )
}
