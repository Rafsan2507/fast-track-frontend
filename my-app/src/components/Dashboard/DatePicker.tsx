
import React, { useState } from 'react';
import { DateTime } from 'luxon';

const DateSelector = () => {
  const [date, setDate] = useState(DateTime.now());

  const handlePreviousDay = () => {
    setDate((prevDate) => prevDate.minus({ days: 1 }));
  };

  const handleNextDay = () => {
    setDate((prevDate) => prevDate.plus({ days: 1 }));
  };

  return (
    <div className="flex items-center justify-center text-center  bg-[#2e3033] text-white px-4 py-2 rounded-lg text-sm font-light">
      <button
        onClick={handlePreviousDay}
        className="text-l px-2 "
      >
        {'<'}
      </button>
      <span className="text-l">
        {date.toFormat('MMM d, yyyy')}
      </span>
      <button
        onClick={handleNextDay}
        className="text-l px-2 "
      >
        {'>'}
      </button>
    </div>
  );
};

export default DateSelector;
