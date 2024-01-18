import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { InputNumber } from 'antd';
import Select from 'react-dropdown-select';
import './bookHotel.scss';

const BookHotel = () => {
  const [phone, setPhone] = useState('+20');
  const options = [
    { label: "ريفيرا ", value: 1 },
    { label: "بلازا", value: 2 },
    { label: "ماجيك ", value: 3 },
  ]

  // Handle the  date change event
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="book-hotel">
      <div className='container'>
        <div className='info_div customer_info'>
          <h3>معلومات طلب حجز الفندق</h3>
          <form className='inputs'>
            <div className='input'>
              <label htmlFor='fullName'>الاسم بالكامل<span>*</span></label>
              <input type='text' id='fullName' placeholder='ادخل اسمك' required />
            </div>
            <div className='input' >
              <label htmlFor='phone'>رقم الواتساب<span>*</span></label>
              <div>
                <PhoneInput
                  id="phone"
                  country={ "eg" }
                  placeholder="رقم الجوال"
                  onChange={ (value) => setPhone(value) }
                  value={ phone }
                  required
                />
              </div>
            </div>
            <div className='input'>
              <label htmlFor='email'>البريد الالكترونى<span>*</span></label>
              <input type='email' id='email' placeholder='ادخل بريدك الالكترونى' required />
            </div>
            <div className='input-dropdown' style={ { maxWidth: "333px" } }>
              <label
                style={ { fontSize: "15px", fontWeight: "700", lineHeight: "18px", color: "#010101" } } >
                اسم الفندق
                <span style={ { fontSize: "24px", fontWeight: "700", lineHeight: "28px", color: "#C9B979" } }>*</span>
              </label>
              <Select
                style={ { width: "333px", backgroundColor: "#F4F6F9", borderRadius: "10px", border: "none", padding: "16px 19px 16px 5px", marginTop: "5px" } }
                options={ options }
                direction='rtl'
                placeholder='ادخل اسم الفندق'
                labelField='label'
                valueField='value'
                color='#9094A0'
              // onChange={ (value) => console.log(value.map(d=>d.label)) }
              />
            </div>
            <div className='input' >
              <label >تاريخ الحجز<span>*</span></label>
              <DatePicker id="date-input"
                selected={ selectedDate }
                onChange={ handleChangeDate }
                dateFormat="dd/MM/yyyy"
                placeholderText="ادخل التاريخ"
              />
            </div>
            <div className='input'>
              <label >الايام<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الايام'
                min={ 1 }
              />
            </div>
            <div className='input'>
              <label >الغرف<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الغرف'
                min={ 1 }
              />
            </div>
            <div className='input'>
              <label >الاشخاص<span>*</span></label>
              <InputNumber style={ { backgroundColor: "#F4F6F9", width: "330px", height: "52px", padding: "10px 10px 0 0" } }
                variant="borderless"
                placeholder='ادخل عدد الاشخاص'
                min={ 1 }
              />
            </div>
          </form>
        </div>
        <button className='btn'>ارسال الطلب</button>
      </div>
    </div>
  )
};

export default BookHotel;