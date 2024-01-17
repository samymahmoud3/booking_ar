// import  { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import './login.scss';

const Login = () => {

  return (
    <div className="login_form">
      <div className="container">
        <h1>مرحبًا بعودتك!</h1>
        <p>تسجيل الدخول إلى حسابك</p>
        <form className="fields">
          <div className="form-group">
            <label htmlFor="email">
              <img src="/email.svg" alt="email" />
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="البريد الإلكتروني"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <img src="/lock.svg" alt="lock" />
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="كلمة المرور"
              required
            />
          </div>
          <p className="password_recovery">استعادة كلمة المرور</p>
          <button type="submit" className="btn">تسجيل الدخول</button>
        </form>
        <div className="back_link">
          <p>لديك حساب بالفعل؟</p>
          <Link to="/registration" className="link">انشاء حساب</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
