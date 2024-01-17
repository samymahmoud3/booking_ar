import './rangeDate.scss';
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