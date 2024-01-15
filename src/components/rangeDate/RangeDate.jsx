// // import { DateRangePicker } from 'rsuite';
// // import 'rsuite/dist/rsuite-rtl.css';
import './rangeDate.scss';

// // const RangeDate = () => {
// //   return (
// //     <div className='dates'>
// //       <DateRangePicker placeholder={ ['يوم/ شهر/ سنه  - يوم/ شهر/ سنه '] } />
// //     </div>
// //   )
// // }

// // export default RangeDate;

// // import { useState } from 'react';
// // import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
// // import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
// // import 'react-clock/dist/Clock.css';
// import TimeRange from 'react-time-range';
// import moment from 'moment';
// function TimeRang() {
//   // const [value, onChange] = useState(['10:00', '11:00']);

//   return (
//     <div>
//       {/* <TimeRangePicker  onChange={ onChange } value={ value } clearAriaLabel="Clear" shouldCloseClock={false} /> */}
//       <TimeRange
//     startMoment={this.state.startTime}
//     endMoment={this.state.endTime}
//     onChange={this.returnFunction}
// />
//     </div>
//   );
// }
// export default TimeRang;

import  { useState } from "react";

import moment from "moment";
import TimeRange from "react-time-range";

function Time() {
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());

  const handleStartTimeChange = event => {
    setStartTime(event.startTime);
  };

  const handleEndTimeChange = event => {
    setEndTime(event.endTime);
  };

  const handleChange = event => {
    console.log("onChange event", event);
  };

  return (<>
    <TimeRange
      onStartTimeChange={handleStartTimeChange}
      onEndTimeChange={handleEndTimeChange}
      startMoment={startTime}
      endMoment={endTime}
      onChange={ handleChange }
      showErrors={ false }
      startLabel="الوصول"
      endLabel="الرجوع"
    />
  </>
  );
}
export default Time;