import { Slider } from '@/components/ui/slider';
import { DateTime } from 'luxon';
import { useState } from 'react';

function SliderButton() {
  const [values, setValues] = useState([0, 1]);

  const formatTime = (value: number) => {
    const minutes = value * 15;
    return DateTime.fromObject({
      hour: Math.floor(minutes / 60),
      minute: minutes % 60,
    }).toFormat('HH:mm');
  };

  return (
    <div className="w-full ">
      <Slider
        className="w-full"
        value={values}
        onValueChange={setValues}
        max={96}
        step={1}
        minStepsBetweenThumbs={1}
      />
      <div className="flex justify-between mb-2 mt-2">
        <span>{formatTime(values[0])}</span>
        <span>{formatTime(values[1])}</span>
      </div>
    </div>
  );
}

export default SliderButton;
