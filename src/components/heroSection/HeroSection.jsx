import CarCategory from '../carCategory/CarCategory';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-rtl.css';
import TimeRange from '../rangeDate/RangeDate';
import DatePicker from "react-datepicker";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { persons, places } from '../../data';
import './heroSection.scss';

const HeroSection = () => {
  const [active, setActive] = useState("bookNow");
  const [selectedCat, setSelectedCat] = useState(null);
  const categories = ["اقتصادية", "عائلية", "فاخرة", "VIP", "VVIP"];

  const handleSelectCat = (index) => {
    setSelectedCat(index);
  };

  // radio buttons
  const [round, setRound] = useState("oneRound");
  const handleChangeRounds = (event) => {
    const value = event.target.value;
    setRound(value);
  }; //end

  // one round date
  const [selectedDate, setSelectedDate] = useState(null);
  // Handle the date change event
  const handleDate = (date) => {
    setSelectedDate(date);
  }; //end

  // one round time
  const format = 'h:mm a';
  function onChangeOneTime(value) {
    console.log(value && value.format(format));
  }
  // end


  return (
    <div className='heroSection'>
      <div className='description'>
        <h2>
          احصل ع وسيله مواصلاتك بكبسه زر وبدقائق معدوده احجز الان وادفع عند وصولك او عبر البطاقه الائتمانيه .
        </h2>
      </div>

      <div className='booking'>
        <div className='type'>
          <div className={ active === "bookNow" ? 'firstActive' : undefined } onClick={ () => setActive("bookNow") }>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.50173 4.75C7.50173 4.5315 9.75973 3 12.0017 3C14.2437 3 16.5017 4.5315 16.5017 4.75C16.5017 5.53 16.4187 5.992 16.3487 6.2435C16.3022 6.4085 16.1477 6.5 15.9762 6.5H8.02723C7.85573 6.5 7.70123 6.4085 7.65473 6.2435C7.58473 5.992 7.50173 5.53 7.50173 4.75ZM11.2517 4.5C11.1191 4.5 10.9919 4.55268 10.8982 4.64645C10.8044 4.74021 10.7517 4.86739 10.7517 5C10.7517 5.13261 10.8044 5.25979 10.8982 5.35355C10.9919 5.44732 11.1191 5.5 11.2517 5.5H12.7517C12.8843 5.5 13.0115 5.44732 13.1053 5.35355C13.199 5.25979 13.2517 5.13261 13.2517 5C13.2517 4.86739 13.199 4.74021 13.1053 4.64645C13.0115 4.55268 12.8843 4.5 12.7517 4.5H11.2517ZM8.02073 9.609C6.35573 9.094 6.77573 8.174 7.41073 7.5H16.7317C17.2397 8.149 17.5122 9.0245 15.9767 9.5485C16.0395 10.1055 15.9845 10.6695 15.8153 11.2039C15.646 11.7383 15.3664 12.2311 14.9945 12.6505C14.6225 13.0698 14.1666 13.4064 13.6563 13.6382C13.1459 13.87 12.5926 13.992 12.032 13.9962C11.4715 14.0005 10.9164 13.8868 10.4026 13.6627C9.88881 13.4386 9.42787 13.109 9.04965 12.6953C8.67144 12.2816 8.38439 11.793 8.20714 11.2613C8.02989 10.7295 7.96638 10.1664 8.02073 9.6085M11.8657 9.9995C13.1867 9.9995 14.2107 9.9295 14.9957 9.8075C15.0215 10.2152 14.9638 10.6238 14.8261 11.0084C14.6884 11.3929 14.4736 11.7453 14.1949 12.0439C13.9162 12.3426 13.5795 12.5811 13.2053 12.745C12.8311 12.9089 12.4275 12.9946 12.019 12.997C11.6105 12.9993 11.2059 12.9182 10.8299 12.7587C10.4538 12.5991 10.1144 12.3645 9.83224 12.0691C9.55012 11.7737 9.33129 11.4238 9.18916 11.0408C9.04704 10.6579 8.98462 10.2499 9.00573 9.842C9.73723 9.943 10.6747 9.9995 11.8657 9.9995ZM16.2102 17.3C15.758 16.5944 15.1355 16.0139 14.4 15.612C13.6646 15.2101 12.8398 14.9996 12.0017 15C11.1633 14.9995 10.3382 15.2099 9.60244 15.6121C8.86671 16.0142 8.24401 16.595 7.79173 17.301C7.62387 17.0425 7.36607 16.8554 7.06823 16.776L6.10223 16.5175C5.78205 16.4317 5.44088 16.4765 5.15377 16.6422C4.86666 16.8079 4.65711 17.0808 4.57123 17.401L4.18323 18.85C4.14073 19.0086 4.12989 19.174 4.15132 19.3367C4.17275 19.4995 4.22603 19.6564 4.30812 19.7986C4.39021 19.9408 4.49949 20.0654 4.62974 20.1653C4.75999 20.2652 4.90865 20.3385 5.06723 20.381L6.03273 20.64C6.19513 20.6837 6.36471 20.6942 6.53124 20.6706C6.69777 20.6471 6.85782 20.5901 7.00173 20.503C7.00213 20.6356 7.05519 20.7626 7.14923 20.8561C7.24328 20.9496 7.37062 21.0019 7.50323 21.0015C7.63584 21.0011 7.76285 20.948 7.85634 20.854C7.94983 20.7599 8.00213 20.6326 8.00173 20.5V20C8.00173 19.8095 8.01523 19.622 8.04073 19.4385L10.6427 20.136C10.7635 20.3945 10.9555 20.6132 11.1962 20.7665C11.437 20.9197 11.7164 21.0011 12.0017 21.0011C12.2871 21.0011 12.5665 20.9197 12.8072 20.7665C13.0479 20.6132 13.2399 20.3945 13.3607 20.136L15.9627 19.4385C15.9882 19.622 16.0017 19.8095 16.0017 20V20.5C16.0011 20.6326 16.0531 20.76 16.1464 20.8543C16.2397 20.9485 16.3666 21.0018 16.4992 21.0025C16.6318 21.0032 16.7593 20.9511 16.8535 20.8578C16.9478 20.7645 17.0011 20.6376 17.0017 20.505C17.2817 20.673 17.6277 20.7315 17.9682 20.64L18.9342 20.3815C19.0928 20.339 19.2415 20.2657 19.3717 20.1658C19.502 20.0659 19.6112 19.9413 19.6933 19.7991C19.7754 19.6569 19.8287 19.5 19.8501 19.3372C19.8716 19.1745 19.8607 19.0091 19.8182 18.8505L19.4297 17.4015C19.3438 17.0813 19.1343 16.8084 18.8472 16.6427C18.5601 16.477 18.2189 16.4322 17.8987 16.518L16.9327 16.7765C16.6356 16.8556 16.3782 17.0424 16.2102 17.3ZM8.30323 18.473C8.57339 17.8199 9.01163 17.2499 9.57341 16.821C10.1352 16.3921 10.8005 16.1195 11.5017 16.031V18.0855C11.2777 18.165 11.0756 18.2965 10.9122 18.4692C10.7488 18.6419 10.6287 18.8509 10.5617 19.079L8.30323 18.473ZM15.7002 18.473C15.43 17.8199 14.9918 17.25 14.43 16.8211C13.8682 16.3921 13.2029 16.1196 12.5017 16.031V18.0855C12.9537 18.2455 13.3067 18.6155 13.4417 19.079L15.7002 18.473ZM12.0017 20C12.1343 20 12.2615 19.9473 12.3553 19.8536C12.449 19.7598 12.5017 19.6326 12.5017 19.5C12.5017 19.3674 12.449 19.2402 12.3553 19.1464C12.2615 19.0527 12.1343 19 12.0017 19C11.8691 19 11.7419 19.0527 11.6482 19.1464C11.5544 19.2402 11.5017 19.3674 11.5017 19.5C11.5017 19.6326 11.5544 19.7598 11.6482 19.8536C11.7419 19.9473 11.8691 20 12.0017 20Z" fill="white" />
            </svg>
            <p className='title'>رحلة</p>
          </div>
          <div className={ active === "byHour" ? 'secondActive' : undefined } onClick={ () => setActive("byHour") }>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52238 6.32513 3.17716 5.10013 4.13864 4.13864C5.10013 3.17716 6.32514 2.52237 7.65876 2.2571C8.99238 1.99183 10.3747 2.12798 11.631 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM14 9C14 9.16576 13.9342 9.32473 13.8169 9.44194C13.6997 9.55915 13.5408 9.625 13.375 9.625H9C8.83424 9.625 8.67527 9.55915 8.55806 9.44194C8.44085 9.32473 8.375 9.16576 8.375 9V4.625C8.375 4.45924 8.44085 4.30027 8.55806 4.18306C8.67527 4.06585 8.83424 4 9 4C9.16576 4 9.32474 4.06585 9.44195 4.18306C9.55916 4.30027 9.625 4.45924 9.625 4.625V8.375H13.375C13.5408 8.375 13.6997 8.44085 13.8169 8.55806C13.9342 8.67527 14 8.83424 14 9Z" fill="white" />
            </svg>
            <p className='title'>بالساعة</p>
          </div>
        </div>

        <div className='info'>
          <div className='content'>
            <div className='methods'>
              <div className="radio">
                <input id="radio-1" name="radio" type="radio" value="oneRound" onChange={ handleChangeRounds } checked={ round === "oneRound" } />
                <label htmlFor="radio-1" className="radio-label">ذهاب فقط</label>
              </div>
              <div className="radio">
                <input id="radio-2" name="radio" type="radio" value="towRound" onChange={ handleChangeRounds } checked={ round === "towRound" } />
                <label htmlFor="radio-2" className="radio-label">ذهاب و عودة</label>
              </div>
            </div>

            <div className='details'>
              <div className='box'>
                <div className='title'>من <span>*</span></div>
                <div className="group">
                  <img className='icon1' src='/arrow-left.svg' alt="arrow-left" />
                  <div>
                    <input list='data' type='text' required />
                    <datalist id='data'>
                      { places.map((option) => (
                        <option value={ option } key={ option } />
                      )) }
                    </datalist>
                    <label>ادخل اسم المطار او الفندق او العنوان...</label>
                  </div>
                  <img className='icon2' src="/arrow-down.svg" alt="arrow-down" />
                </div>
              </div>
              { active === "bookNow" &&
                <div className='box'>
                  <div className='title'>إلى <span>*</span></div>
                  <div className="group">
                    <img className='icon1' src='/location.svg' alt="location" />
                    <div>
                      <input list='data' type='text' required />
                      <datalist id='data'>
                        { places.map((option) => (
                          <option value={ option } key={ option } />
                        )) }
                      </datalist>
                      <label>ادخل اسم المطار او الفندق او العنوان...</label>
                    </div>
                    <img className='icon2' src="/arrow-down.svg" alt="arrow-down" />
                  </div>
                </div>
              }
              <div className='box'>
                <div className='title'>متى تاريخ الحجز؟ <span>*</span></div>
                { round === "oneRound" ?
                  <div className='oneRoundDate' style={ { border: "none" } }>
                    <label htmlFor='date-input'><img src='/calender.svg' alt='calender' /></label>
                    <DatePicker id="date-input"
                      selected={ selectedDate }
                      onChange={ handleDate }
                      dateFormat="yyyy/MM/dd"
                      placeholderText="يوم / شهر / سنه "
                    />
                  </div>
                  : <DateRangePicker placeholder='يوم/ شهر/ سنه  - يوم/ شهر/ سنه ' />
                }
              </div>
              <div className='box'>
                <div className='title'>الوقت<span>*</span></div>
                { round === "oneRound"
                  ?
                  <div className="oneRoundTime">
                    <img src='./clock.svg' alt='clock' />
                    <TimePicker
                      placeholder='حدد الوقت الوصول'
                      showSecond={ false }
                      onChange={ onChangeOneTime }
                      format={ format }
                      use12Hours
                    />
                  </div>
                  : <TimeRange />
                }
              </div>
              <div className='box'>
                <div className='title'>الركّاب <span>*</span></div>
                <div className="group">
                  <img className='icon1' src='/user.svg' alt="user" />
                  <div>
                    <input list='numbers' type='text' required />
                    <datalist id='numbers'>
                      { persons.map((option) => (
                        <option value={ option } key={ option } />
                      )) }
                    </datalist>
                    <label>عدد الركاب</label>
                  </div>
                  <img className='icon2' src="/arrow-down.svg" alt="arrow-down" />
                </div>
              </div>
            </div>

            <div className='categories'>
              <div className="title">الفئة <span>*</span></div>
              <div className='category'>
                { categories.map((cat, index) => (
                  <div key={ cat } onClick={ () => handleSelectCat(index) }>
                    <CarCategory select={ selectedCat === index ? "selected" : "" } category={ cat } />
                  </div>
                )) }
              </div>
            </div>
          </div>
          <Link className='btn link' to='/booking' style={ { textDecoration: "none", color: "#ffffff" } } >
            <div className='bttn'>حجز</div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default HeroSection;




