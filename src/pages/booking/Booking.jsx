import { useState } from 'react';
import CarCategory from '../../components/carCategory/CarCategory';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { paymentOptions} from '../../data';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-rtl.css';
import TimeRange from "react-time-range";
import moment from "moment";
import { TimePicker,InputNumber} from 'antd';
import { ExpandMore, PermIdentity } from '@mui/icons-material';
import Select from 'react-dropdown-select';
import './booking.scss';

const Booking = () => {
  const [selected, setSelected] = useState(null);
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedDate, setSelectedDate] = useState(null);
  const [phone, setPhone] = useState('+20');

  const options = [
    { name: "مكة" },
    { name: "المدينة" },
    { name: "الرياض" },
  ]

  // start timeRang
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());
  const handleStartTimeChange = event => {
    setStartTime(event.startTime);
  };
  const handleEndTimeChange = event => {
    setEndTime(event.endTime);
  };
  const handleChangeTime = event => {
    console.log("onChange event", event);
  };
  //end

  const categories = ["اقتصادية", "عائلية", "فاخرة", "VIP", "VVIP"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSelect = (index) => {
    setSelected(index);
  };

  // Handle the date change event
  const handleChange = (date) => {
    setSelectedDate(date);
  };

  // radio buttons
  const [round, setRound] = useState("oneRound");
  const handleChangeRounds = (event) => {
    const value = event.target.value;
    setRound(value);
  }; //end

  // one round time picker
  /** 
    const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
    };
  */
  // end

  // one round date
  const [selectedDateOne, setSelectedDateOne] = useState(null);
  // Handle the date change event
  const handleDateOne = (date) => {
    setSelectedDateOne(date);
  }; //end


  return (
    <div className='booking'>
      <div className='container'>
        <div className='features'>
          <div className='feature'>
            <img src='/free-cancellation.svg' alt='free cancellation' />
            <div className='description'>
              <h3>إلغاء مجاني</h3>
              <p>ما يصل إلى 24 ساعة قبل الاستلام</p>
            </div>
          </div>
          <div className='feature'>
            <img src='/flight-tracking.svg' alt='flight tracking' />
            <div className='description'>
              <h3>تتبع الرحلة</h3>
              <p>سيقوم السائق بمراقبة رحلتك</p>
            </div>
          </div>
          <div className='feature'>
            <img src='/professional-drivers.svg' alt='professional drivers' />
            <div className='description'>
              <h3>سائقون مرخصون</h3>
              <p>أقصى قدر من الراحة والأمان</p>
            </div>
          </div>
          <div className='feature'>
            <img src='/customer-service.svg' alt='customer service' />
            <div className='description'>
              <h3>دعم 24/7</h3>
              <p>خدمة عملاء مخصصة</p>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='information'>
            <div className='info_div booking_info'>
              <h3>معلومات الحجز</h3>
              <div className='radio_buttons'>
                <div className="radio">
                  <input id="radio-1" name="radio" type="radio" value="oneRound" onChange={ handleChangeRounds } checked={ round === "oneRound" } />
                  <label htmlFor="radio-1" className="radio-label">ذهاب فقط</label>
                </div>
                <div className="radio">
                  <input id="radio-2" name="radio" type="radio" value="towRound" onChange={ handleChangeRounds } checked={ round === "towRound" } />
                  <label htmlFor="radio-2" className="radio-label">ذهاب و عودة</label>
                </div>
              </div>
              <div className='booking_inputs'>
                <div className='box'>
                  <div className='title'>من <span>*</span></div>
                  <div className='input-dropdown'>
                    <img src='/arrow-left.svg' />
                    <Select className='select-input'
                      options={ options }
                      direction='rtl'
                      placeholder='ادخل اسم المطار او الفندق او العنوان'
                      labelField='name'
                      valueField='name'
                      color='#9094A0'
                    // onChange={ (value) => console.log(value.map(e=>e.name)) }
                    />
                  </div>
                </div>
                <div className='box'>
                  <div className='title'>إلى <span>*</span></div>
                  <div className='input-dropdown'>
                    <img src='/location.svg' />
                    <Select className='select-input'
                      options={ options }
                      direction='rtl'
                      placeholder='ادخل اسم المطار او الفندق او العنوان'
                      labelField='name'
                      valueField='name'
                      color='#9094A0'
                    // onChange={ (value) => console.log(value.map(e=>e.name)) }
                    />
                  </div>
                </div>
                <div className='box'>
                  <div className='title' >الوقت<span>*</span></div>
                  { round === "oneRound" ?
                    <div className='time-box' style={ { width: "328px" } }>
                      <div className='time-field'>
                        <img src='/clock.svg' alt='clock' />
                        <TimePicker
                          className='time-input'
                          use12Hours
                          format="h:mm a"
                          variant="borderless"
                          placeholder='حدد وقت الوصول'
                          suffixIcon={ <ExpandMore /> }
                        />
                      </div>
                    </div>
                    : <TimeRange
                      onStartTimeChange={ handleStartTimeChange }
                      onEndTimeChange={ handleEndTimeChange }
                      startMoment={ startTime }
                      endMoment={ endTime }
                      onChange={ handleChangeTime }
                      showErrors={ false }
                      startLabel="حدد وقت الوصول"
                      endLabel=" حدد وقت الرجوع"
                    />
                  }
                  
                </div>
                <div className='box'>
                  <div className='title'>متى تاريخ الحجز؟ <span>*</span></div>
                  { round === "oneRound" ?
                    <div className='oneRoundDate'>
                      <label htmlFor='date-input'>
                        <img src='/calender.svg' alt='calender' />
                      </label>
                      <DatePicker id="date-input"
                        selected={ selectedDateOne }
                        onChange={ handleDateOne }
                        dateFormat="yyyy/MM/dd"
                        placeholderText="يوم / شهر / سنه "
                      />
                    </div>
                    : <DateRangePicker placeholder={ ['يوم/ شهر/ سنه  - يوم/ شهر/ سنه '] } />
                  }
                </div>
                <div className='box'>
                  <div className='title'>الركّاب <span>*</span></div>
                  <InputNumber className='number-input'
                    style={ { backgroundColor: "#F4F6F9", width: "327px", height: "52px", padding: "16px 0px 0 0" } }
                    variant="borderless"
                    placeholder='ادخل عدد الركاب'
                    addonBefore={ <PermIdentity  sx={ {fontSize:'15px', color: "#9094A0",padding:"1px 0 0 0" } } /> }
                    min={ 1 }
                  />
                </div>
              </div>
              <div className='categories'>
                <div className="title">الفئة <span>*</span></div>
                <div className='category'>
                  { categories.map((cat, index) => (
                    <div key={ cat } onClick={ () => handleSelect(index) }>
                      <CarCategory select={ selected === index ? "selected" : "" } category={ cat } />
                    </div>
                  )) }
                </div>
              </div>
            </div>
            <div className='info_div addition_info'>
              <h3>معلومات اضافية</h3>
              <div className='attach_files'>
                <p>
                  <span>*</span>يرجى ارفاق حجز الطيران او رقم الرحلة ( لمتابعه السائق موعد الوصول)
                </p>
                <div className='content'>
                  <div className='upload_file'>
                    <img src='/upload.svg' alt='upload file' />
                    <h2>Upload Files</h2>
                    <p>PNG, JPG and GIF files are allowed</p>
                  </div>
                  <div className='addition_options'>
                    <h2>خدمات اضافية (لحجوزات المطار)<span>*</span></h2>
                    <div className='checkbox_inputs'>
                      <div className="checkbox">
                        <label htmlFor="checkbox-1" className=" container">
                          خدمة الاستقبال من بوابة الخروج من المطار
                          <input
                            id='checkbox-1'
                            value='option1'
                            type="checkbox"
                            checked={ selectedOption === 'option1' }
                            onChange={ handleOptionChange }
                          />
                          <span className="checkmark"></span>
                        </label>
                        <span>مجانا</span>
                      </div>
                      <div className="checkbox">
                        <label htmlFor="checkbox-2" className="container">
                          الاستقبال من داخل المطار <br />
                          <span className='text'>(للترحيب باسمك بلوحه ف المطار مع المساعده)</span>
                          <input
                            id='checkbox-2'
                            value='option2'
                            type="checkbox"
                            checked={ selectedOption === 'option2' }
                            onChange={ handleOptionChange }
                          />
                          <span className="checkmark"></span>
                        </label>
                        <span>100 ريال</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='notes'>
                <h3>ملاحظات</h3>
                <textarea placeholder='اكتب ملاحظاتك هنا...' />
              </div>
            </div>
            <div className='info_div customer_info'>
              <h3>معلومات العميل</h3>
              <div className='inputs'>
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
              </div>
            </div>
            <div className='info_div payment_options'>
              <h3>خيارات الدفع</h3>
              <div className='options'>
                {
                  paymentOptions.map((option, index) => (
                    <div className={ `option ${selected === index ? "selected" : ""}` } key={ index } onClick={ () => handleSelect(index) }>
                      <h4>{ option.title }</h4>
                      <p>{ option.description }</p>
                      { selected === index &&
                        <img className='question_mark' src='/question-mark.svg' alt='question mark' />
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='info_div payment_info'>
              <h3>معلومات الدفع </h3>
              <div>
                <h4>الخدمات الاضافيه </h4>
                <p>200.00 $</p>
              </div>
              <div>
                <h4>الخصم</h4>
                <p>0.00 $</p>
              </div>
              <div>
                <h4>مبلغ الحجز</h4>
                <p>200.00 $</p>
              </div>
              <div>
                <h4>مجموع المبلغ المطلوب</h4>
                <p>400.00 $</p>
              </div>
            </div>
            <div className='info_div card_info'>
              <div className='title'>
                <h3>معلومات البطاقه</h3>
                <div className='cards'>
                  <img src='/mastercard.svg' alt='mastercard' />
                  <img src='/visa.svg' alt='visa' />
                </div>
              </div>
              <div className='inputs'>
                <div className='input'>
                  <label htmlFor='cardName'>الاسم على بطاقة الائتمان<span>*</span></label>
                  <input type='text' id='cardName' placeholder='ادخل اسم صاحب البطاقة' required />
                </div>
                <div className='input'>
                  <label htmlFor='cardNumber'>رقم بطاقة الائتمان<span>*</span></label>
                  <input type='tel' id='cardNumber' placeholder='ادخل رقم بطاقة الائتمان' required />
                </div>
                <div className='input'>
                  <label htmlFor='expireDate'>تاريخ الصلاحية<span>*</span></label>
                  <DatePicker id="date-input"
                    selected={ selectedDate }
                    onChange={ handleChange }
                    dateFormat="dd/MM/yyyy"
                    placeholderText="23/01/2024"
                  />
                </div>
                <div className='input'>
                  <label htmlFor='pass'>CVV<span>*</span></label>
                  <input type='tel' id='pass' placeholder='223' required />
                </div>
              </div>
              <div className='pay_btn btn'>
                دفع
              </div>
            </div>
          </div>

          <div className='booking_map'>map</div>

        </div>
      </div>
    </div>
  )
};

export default Booking;