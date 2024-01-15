import { Link, NavLink } from "react-router-dom";
import "./navbar.scss"
import { HashLink} from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo link">الراقى للتوصيل</Link>
      <div className="links">
        <NavLink to="/" className="link" activeclassname="active">الرئيسية</NavLink>
        <HashLink className="link" smooth="true" to="/#choose-us">لماذا تختارنا</HashLink>
        <HashLink className="link" smooth="true" to="/#car-types">انواع سيارتنا</HashLink>
        <HashLink className="link" smooth="true" to="/#reviews">تقييمات العملاء</HashLink>
        <HashLink className="link" smooth="true" to="/#faq">الاسئلة الشائعة</HashLink>
        <HashLink className="link" smooth="true" to="/#contact-us">التواصل</HashLink>
      </div>
      <Link to="/login" className="login link">تسجيل الدخول</Link>
    </nav>
  )
}

export default Navbar;