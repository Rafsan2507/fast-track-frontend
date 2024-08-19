import { useState } from 'react';
import DateSelector from './DatePicker';
import SliderButton from './SliderButton';

function Filter() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <p>Filters</p>
        <button className="text-green-400">Reset</button>
      </div>
      <p className="text-xs font-light">Date</p>
      <DateSelector />
      <div className="flex flex-col gap-y-4">
        <p className="text-xs font-light">Time</p>
        <SliderButton />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="text-xs font-light">Education</p>
        <div className="flex space-x-4">
          <button
            className={`rounded-xl text-xs font-light p-2 ${
              activeButton === 'Bachelors'
                ? 'bg-white text-black'
                : 'bg-[#2f3033] text-white'
            }`}
            onClick={() => handleButtonClick('Bachelors')}
          >
            Bachelors
          </button>
          <button
            className={`rounded-xl text-xs font-light p-2 ${
              activeButton === 'Masters'
                ? 'bg-white text-black'
                : 'bg-[#2f3033] text-white'
            }`}
            onClick={() => handleButtonClick('Masters')}
          >
            Masters
          </button>
          <button
            className={`rounded-xl text-xs font-light p-2 ${
              activeButton === 'MBA'
                ? 'bg-white text-black'
                : 'bg-[#2f3033] text-white'
            }`}
            onClick={() => handleButtonClick('MBA')}
          >
            MBA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
