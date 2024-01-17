// import  { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import './registration.scss'

const Registration = () => {

  return (
    <div className="registration">
      <div className="container">
        <h1>ابدأ مع الراقى للتوصيل</h1>
        <p>إنشاء حساب</p>
        <form className="fields">
          <div className="form-group">
            <label htmlFor="name">
              <img src="/profile.svg" alt="profile" />
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="الاسم الكامل"
              required
            />
          </div>
          <div style={{marginBottom: "30px"}}>
            <PhoneInput
              id="phone"
              country={ "eg" }
              placeholder="رقم الجوال"
              required
            />
          </div>
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
          <button type="submit" className="btn">طلب انشاء حساب</button>
        </form>
        <div className="back_login">
          <p>لديك حساب بالفعل؟</p>
          <Link to="/login" className="log" >تسجيل الدخول</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
