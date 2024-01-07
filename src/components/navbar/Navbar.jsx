import { Link, NavLink } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo link">الراقى للتوصيل</Link>
      <div className="links">
        <NavLink to="/" className="link" activeclassname="active">الرئيسية</NavLink>
        <NavLink to="/booking" className="link" activeclassname="active">احجز الان</NavLink>
        <NavLink to="/services" className="link" activeclassname="active">خدماتنا</NavLink>
        <NavLink to="/about" className="link" activeclassname="active">من نحن</NavLink>
        <NavLink to="/customer-reviews" className="link" activeclassname="active">اراء العملاء</NavLink>
        <NavLink to="/hotel-booking" className="link" activeclassname="active">حجوزات الفنادق</NavLink>
        <NavLink to="/contact" className="link" activeclassname="active">التواصل</NavLink>
      </div>
      <Link to="/login" className="login link">تسجيل الدخول</Link>
    </nav>
  )
}

export default Navbar;