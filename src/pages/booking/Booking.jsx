import { useRef, useState, useEffect } from 'react';
import CarCategory from '../../components/carCategory/CarCategory';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { paymentOptions } from '../../data';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-rtl.css';
import TimeRange from "react-time-range";
import moment from "moment";
import { TimePicker } from 'antd';
import { ExpandMore } from '@mui/icons-material';
import Select from 'react-dropdown-select';
import './booking.scss';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api'

const center = { lat: 23.885, lng: 45.0792 }


const Booking = () => {
  const [selected, setSelected] = useState(null);
  const [selectedOption, setSelectedOption] = useState('option1'); // check box options
  const [paymentOption, setPaymentOption] = useState(paymentOptions[0].title);
  const [selectedDate, setSelectedDate] = useState(null);
  const [phone, setPhone] = useState('');

  const options = [
    { name: "مكة" },
    { name: "المدينة" },
    { name: "الرياض" },
  ]

  const personsOptions = [
    { name: "1 راكب" },
    { name: "2 ركّاب" },
    { name: "3 ركّاب" },
    { name: "4 ركّاب" },
    { name: "5 ركّاب" },
    { name: "6 ركّاب" },
    { name: "7 ركّاب" },
    { name: "8 ركّاب" },
    { name: "9 ركّاب" },
    { name: "10 ركّاب" },
    { name: "11 ركّاب" },
    { name: "12 ركّاب" },
    { name: "13 ركّاب" },
    { name: "14 ركّاب" },
    { name: "15 ركّاب" },
    { name: "16 ركّاب" },
    { name: "17 ركّاب" },
    { name: "18 ركّاب" },
    { name: "19 ركّاب" },
    { name: "20 ركّاب" },
  ]

  const categories = ["اقتصادية", "عائلية", "فاخرة", "VIP", "VVIP"]

  // handle upload files
  const fileInputRef = useRef(null);
  const handleFileInput = () => {
    fileInputRef.current.click();
  }

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

  // addition options check box
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

  // map
  const [originValue, setOriginValue] = useState(" ");
  const [destinationValue, setDestinationValue] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyASgAbuH64TxCFi1thH0LEl_kIhNorkP3Q",
    libraries: ['places'],
  })

  const [directionsResponse, setDirectionsResponse] = useState(null)

  async function calculateRoute() {
    if (!isLoaded || !window.google || !window.google.maps) {
      return;
    }

    let geocoder = new window.google.maps.Geocoder();
    let originLatLng, destinationLatLng;

    // Geocode origin
    try {
      const originResult = await geocodeAddress(geocoder, originValue);
      originLatLng = originResult.geometry.location.toJSON();
    } catch (error) {
      console.error("Error geocoding origin address:", error.message);
      return;
    }

    // Geocode destination
    try {
      const destinationResult = await geocodeAddress(geocoder, destinationValue);
      destinationLatLng = destinationResult.geometry.location.toJSON();
    } catch (error) {
      console.error("Error geocoding destination address:", error.message);
      return;
    }

    // Continue with the directions request using the geocoded coordinates
    let directionsService = new window.google.maps.DirectionsService();
    let results = await directionsService.route({
      origin: originLatLng,
      destination: destinationLatLng,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
  }

  async function geocodeAddress(geocoder, address) {
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          resolve(results[0]);
        } else {
          reject(new Error(`Geocoding error: ${status}`));
        }
      });
    });
  }

  useEffect(() => {
    calculateRoute();
  }, [destinationValue]);

  if (!isLoaded) {
    return <div className='spinner-container'>
      <img src='/spinner1.gif' alt='loading' />
    </div>;
  }

  return (
    <div className='booking'>
      <div className='container'>
        <div className='features-container'>
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
                    <img src='/arrow-left.svg' style={ { marginTop: "4px" } } />
                    <span style={ { fontSize: "10px" } }>من:</span>
                    <Select className='select-input'
                      options={ options }
                      direction='rtl'
                        placeholder='المطار،المدينة،الفندق،الأماكن الأخرى'
                      labelField='name'
                      valueField='name'
                      color='#9094A0'
                      onChange={ (value) => (value.map(e => setOriginValue(e.name))) }
                    />
                  </div>
                </div>
                <div className='box'>
                  <div className='title'>إلى <span>*</span></div>
                  <div className='input-dropdown'>
                    <img src='/location.svg' style={ { marginTop: "2px", marginLeft: "5px" } } />
                    <span style={ { fontSize: "10px" } }>الى:</span>
                    <Select className='select-input'
                      options={ options }
                      direction='rtl'
                      placeholder='المطار،المدينة،الفندق،الأماكن الأخرى'
                      labelField='name'
                      valueField='name'
                      color='#9094A0'
                      onChange={ (value) => (value.map(e => setDestinationValue(e.name))) }
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
                          format="h:mm A"
                          variant="borderless"
                          placeholder='حدد الوقت '
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
                      startLabel="الوصول"
                      endLabel="الرجوع"
                    />
                  }

                </div>
                <div className='box'>
                  <div className='title'>متى تاريخ الحجز؟ <span>*</span></div>
                  { round === "oneRound" ?
                    <div className='oneRoundDate'>
                      <label htmlFor='date-input' style={ { marginTop: "4px", display: "flex" } }>
                        <img src='/calender.svg' alt='calender' style={ { marginLeft: "1px" } } />
                        <span style={ { fontSize: "8px", marginTop: "1px" } }>التاريخ:</span>
                      </label>
                      <DatePicker id="date-input"
                        selected={ selectedDateOne }
                        onChange={ handleDateOne }
                        dateFormat="yyyy/MM/dd"
                        placeholderText="يوم / شهر / سنه "
                      />
                    </div>
                    : 
                    <DateRangePicker showOneCalendar placeholder='يوم/ شهر/ سنه  - يوم/ شهر/ سنه ' />
                  }
                </div>
                <div className='box'>
                  <div className='title'>الركّاب <span>*</span></div>
                  <div className='input-dropdown'>
                    <img src='user.svg'/>
                    <span style={ { fontSize: "10px" } }>عدد:</span>
                    <Select className='select-input select-number'
                      options={ personsOptions }
                      direction='rtl'
                      placeholder='عدد الركّاب'
                      labelField='name'
                      valueField='name'
                      color='#9094A0'
                    />
                  </div>
                </div>
              </div>
              <div className='categories'>
                <div className="title">الفئة <span>*</span></div>
                <div className='category'>
                  { categories.map((cat, index) => (
                    <div className='item' key={ cat } onClick={ () => handleSelect(index) }>
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
                  <input ref={ fileInputRef } type='file' style={ { display: "none" } } />
                  <div className='upload_file' onClick={ handleFileInput }>
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
                        <span style={ { width: "32px" } }>مجانا</span>
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
                        <span style={ { width: "32px" } }>100 ريال</span>
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
                      country={ "sa" }
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
                    <div className={ `option ${paymentOption === option.title ? "selected" : ""}` } key={ index } onClick={ () => setPaymentOption(option.title) }>
                      <h4>{ option.title }</h4>
                      <p>{ option.description }</p>
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
            {
              paymentOption != "الدفع عند الوصول" ?
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
                : <div className='btn'>
                  حجز
                </div>
            }
          </div>
          {/* map */ }
          <div className='booking_map' style={ { position: "relative" } }>
            <GoogleMap
              center={ center }
              zoom={ 5 }
              mapContainerStyle={ { width: '100%', height: '100%' } }
              options={ {
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
              } }
            >
              <Marker position={ center } />
              { directionsResponse && (
                <DirectionsRenderer directions={ directionsResponse } />
              ) }
            </GoogleMap>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Booking;