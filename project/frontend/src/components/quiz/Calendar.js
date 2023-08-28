import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {registerLocale} from "react-datepicker";

registerLocale('ru', ru)
const Calendar = ({calendarHandler, date}) => {
  const [startDate, setStartDate] = useState(date ? date : new Date());
  useEffect(()=>{
    calendarHandler(`${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`,startDate)
  },[startDate])
  return (
    <DatePicker
        className="date"
        locale="ru"
        dateFormat="dd-MM-yyyy"
        startDate={startDate}
        minDate={startDate}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
    />
  );
};

export default Calendar