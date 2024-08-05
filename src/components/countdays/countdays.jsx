import React, { useEffect, useState } from 'react';


const ClockAndDate = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[monthIndex];
    const year = currentDate.getFullYear();
    const dayNumber = currentDate.getDay();
    const daysOfWeek = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const day = daysOfWeek[dayNumber];

    setDate(`${month} ${day} ${dayOfMonth} ${year}`);
  }, []);

  return (
    <div className="text-center mt-5">
      <div className="flex justify-center items-center space-x-4 text-xl font-mono">
        <div className="time-part">
        <span className=" font-bold">Days</span>
          <span id="days" className="block text-5xl font-bold">{String(time.getDate()).padStart(2, '0')}</span>
        </div>
        <div className="separator text-5xl mt-[16px] text-red-300">:</div>
        <div className="time-part">
        <span className=" font-bold">Hours</span>
          <span id="hours" className="block text-5xl font-bold">{String(time.getHours()).padStart(2, '0')}</span>
        </div>
        <div className="separator text-5xl mt-[16px] text-red-300">:</div>
        <div className="time-part">
        <span className=" font-bold">Minutes</span>
          <span id="minutes" className="block text-5xl font-bold">{String(time.getMinutes()).padStart(2, '0')}</span>
        </div>
        <div className="separator text-5xl mt-[16px] text-red-300">:</div>
        <div className="time-part">
        <span className=" font-bold">Seconds</span>
          <span id="seconds" className="block text-5xl font-bold">{String(time.getSeconds()).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default ClockAndDate;
