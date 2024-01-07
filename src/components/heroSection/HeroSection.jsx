import CarCategory from '../carCategory/CarCategory';
import { Link } from 'react-router-dom';
import Input from '../input/Input';
import { useState } from 'react';
import './heroSection.scss';

const HeroSection = () => {
  const [active, setActive] = useState("bookNow");
  const [selectedCat, setSelectedCat] = useState(null);
  const categories = ["اقتصادية", "عائلية", "فاخرة", "VIP", "VVIP"];

  const handleSelectCat = (index) => {
    setSelectedCat(index);
  };

  return (
    <div className='heroSection'>
      <div className='description'>
        <h2>
          احصل ع وسيله مواصلاتك بكبسه زر وبدقائق معدوده احجز الان وادفع عند وصولك او عبر البطاقه الائتمانيه .
        </h2>
      </div>

      <div className='booking'>
        <div className='type'>
          <div className={ active === "bookNow" && 'firstActive' } onClick={ () => setActive("bookNow") }>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9.50001H5.32L6.57 6.38001C6.79325 5.82527 7.17718 5.3499 7.67253 5.01492C8.16787 4.67993 8.75202 4.50063 9.35 4.50001H15.35C16.0447 4.49802 16.7186 4.7372 17.2566 5.17673C17.7946 5.61625 18.1634 6.22886 18.3 6.91001L18.82 9.50001H19C19.7956 9.50001 20.5587 9.81608 21.1213 10.3787C21.6839 10.9413 22 11.7044 22 12.5V15.5C22 15.7652 21.8946 16.0196 21.7071 16.2071C21.5196 16.3947 21.2652 16.5 21 16.5H20C20 17.2957 19.6839 18.0587 19.1213 18.6213C18.5587 19.1839 17.7956 19.5 17 19.5C16.2044 19.5 15.4413 19.1839 14.8787 18.6213C14.3161 18.0587 14 17.2957 14 16.5H10C10 17.2957 9.68393 18.0587 9.12132 18.6213C8.55871 19.1839 7.79565 19.5 7 19.5C6.20435 19.5 5.44129 19.1839 4.87868 18.6213C4.31607 18.0587 4 17.2957 4 16.5H3C2.73478 16.5 2.48043 16.3947 2.29289 16.2071C2.10536 16.0196 2 15.7652 2 15.5V12.5C2 11.7044 2.31607 10.9413 2.87868 10.3787C3.44129 9.81608 4.20435 9.50001 5 9.50001ZM11 6.50001H9.35C9.15143 6.50181 8.95789 6.56269 8.79404 6.67488C8.6302 6.78708 8.50347 6.94552 8.43 7.13001L7.48 9.50001H11V6.50001ZM16.34 7.30001C16.2932 7.07074 16.1676 6.86511 15.9849 6.71894C15.8021 6.57277 15.5739 6.49529 15.34 6.50001H13V9.50001H16.78L16.34 7.30001ZM17 17.5C17.1978 17.5 17.3911 17.4414 17.5556 17.3315C17.72 17.2216 17.8482 17.0654 17.9239 16.8827C17.9996 16.7 18.0194 16.4989 17.9808 16.3049C17.9422 16.1109 17.847 15.9328 17.7071 15.7929C17.5673 15.6531 17.3891 15.5578 17.1951 15.5192C17.0011 15.4806 16.8 15.5004 16.6173 15.5761C16.4346 15.6518 16.2784 15.78 16.1685 15.9444C16.0586 16.1089 16 16.3022 16 16.5C16 16.7652 16.1054 17.0196 16.2929 17.2071C16.4804 17.3947 16.7348 17.5 17 17.5ZM7 17.5C7.19778 17.5 7.39112 17.4414 7.55557 17.3315C7.72002 17.2216 7.84819 17.0654 7.92388 16.8827C7.99957 16.7 8.01937 16.4989 7.98079 16.3049C7.9422 16.1109 7.84696 15.9328 7.70711 15.7929C7.56726 15.6531 7.38907 15.5578 7.19509 15.5192C7.00111 15.4806 6.80004 15.5004 6.61732 15.5761C6.43459 15.6518 6.27841 15.78 6.16853 15.9444C6.05865 16.1089 6 16.3022 6 16.5C6 16.7652 6.10536 17.0196 6.29289 17.2071C6.48043 17.3947 6.73478 17.5 7 17.5ZM4 14.5H4.78C5.06118 14.1907 5.40391 13.9435 5.78622 13.7743C6.16852 13.6052 6.58195 13.5178 7 13.5178C7.41805 13.5178 7.83148 13.6052 8.21378 13.7743C8.59609 13.9435 8.93882 14.1907 9.22 14.5H14.78C15.0612 14.1907 15.4039 13.9435 15.7862 13.7743C16.1685 13.6052 16.582 13.5178 17 13.5178C17.418 13.5178 17.8315 13.6052 18.2138 13.7743C18.5961 13.9435 18.9388 14.1907 19.22 14.5H20V12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5V14.5Z" fill="white" />
            </svg>
            <p className='title'>احجز الان</p>
          </div>
          <div className={ active === "byHour" && 'secondActive' } onClick={ () => setActive("byHour") }>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52238 6.32513 3.17716 5.10013 4.13864 4.13864C5.10013 3.17716 6.32514 2.52237 7.65876 2.2571C8.99238 1.99183 10.3747 2.12798 11.631 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM14 9C14 9.16576 13.9342 9.32473 13.8169 9.44194C13.6997 9.55915 13.5408 9.625 13.375 9.625H9C8.83424 9.625 8.67527 9.55915 8.55806 9.44194C8.44085 9.32473 8.375 9.16576 8.375 9V4.625C8.375 4.45924 8.44085 4.30027 8.55806 4.18306C8.67527 4.06585 8.83424 4 9 4C9.16576 4 9.32474 4.06585 9.44195 4.18306C9.55916 4.30027 9.625 4.45924 9.625 4.625V8.375H13.375C13.5408 8.375 13.6997 8.44085 13.8169 8.55806C13.9342 8.67527 14 8.83424 14 9Z" fill="white" />
            </svg>
            <p className='title'>بالساعة</p>
          </div>
          <div className={ active === "byDay" && 'thirdActive' } onClick={ () => setActive("byDay") }>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0.05V2.07C14.95 2.56 18 5.92 18 10C18 13.21 16.08 16 13.28 17.28L11 15V20H16L14.78 18.78C17.91 17.07 20 13.76 20 10C20 4.82 16.05 0.55 11 0.05ZM9 0C7.05 0.2 5.2 0.96 3.68 2.21L5.1 3.63C6.2351 2.75498 7.57983 2.19295 9 2V0ZM2.2 3.68C0.96 5.2 0.2 7.05 0 9H2C2.19 7.58 2.75 6.23 3.63 5.1L2.2 3.68ZM4 6V8H7V9H6C4.9 9 4 9.9 4 11V14H9V12H6V11H7C8.11 11 9 10.11 9 9V8C9 7.46957 8.78929 6.96086 8.41421 6.58579C8.03914 6.21071 7.53043 6 7 6H4ZM10 6V11H13V14H15V11H16V9H15V6H13V9H12V6H10ZM0 11C0.2 12.95 0.97 14.8 2.22 16.32L3.64 14.9C2.76201 13.7656 2.19657 12.4209 2 11H0ZM5.11 16.37L3.68 17.79C5.19938 19.0305 7.04886 19.7988 9 20V18C7.58168 17.8114 6.23907 17.2489 5.11 16.37Z" fill="white" />
            </svg>
            <p className='title'>باليوم</p>
          </div>
        </div>

        <div className='info'>
          <div>
            <div className='methods'>
              <div className="radio">
                <input id="radio-1" name="radio" type="radio" checked />
                <label htmlFor="radio-1" className="radio-label">ذهاب فقط</label>
              </div>
              <div className="radio">
                <input id="radio-2" name="radio" type="radio" />
                <label htmlFor="radio-2" className="radio-label">ذهاب و عودة</label>
              </div>
            </div>

            <div className='details'>
              <div className='box'>
                <div className='title'>من <span>*</span></div>
                <div className='field'>
                  <Input iconPath="arrow-left.svg" inputType="text" inputPlaceholder="ادخل اسم المطار او الفندق او العنوان..." />
                </div>
              </div>
              { active === "bookNow" &&
                <div className='box'>
                  <div className='title'>إلى <span>*</span></div>
                  <div className='field'>
                    <Input iconPath="location.svg" inputType="text" inputPlaceholder="ادخل اسم المطار او الفندق او العنوان..." />
                  </div>
                </div>
              }
              <div className='box'>
                <div className='title'>متى تاريخ الحجز؟ <span>*</span></div>
                <div className='field'>
                  <Input iconPath="calender.svg" inputType="text" inputPlaceholder="يوم / شهر / سنه" />
                </div>
              </div>
              <div className='box'>
                <div className='title'> { active === "byHour" ? "المدة" : "الوقت" } <span>*</span></div>
                <div className='field'>
                  <Input iconPath="clock.svg" inputType="text" inputPlaceholder={ active === "byHour" ? "عدد الساعات" : "حدد وقت الوصول" } />
                </div>
              </div>
              <div className='box'>
                <div className='title'>الركّاب <span>*</span></div>
                <div className='field'>
                  <Input iconPath="user.svg" inputType="text" inputPlaceholder="عدد الركاب" />
                </div>
              </div>
            </div>

            <div className='categories'>
              <div className="title">الفئة <span>*</span></div>
              <div className='category'>
                { categories.map((cat, index) => (
                  <div key={ cat } onClick={() => handleSelectCat(index)}>
                    <CarCategory select={selectedCat === index? "selected" : ""} category={ cat } />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='btn'>
            <Link className='link' to='/booking' >حجز</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroSection;




