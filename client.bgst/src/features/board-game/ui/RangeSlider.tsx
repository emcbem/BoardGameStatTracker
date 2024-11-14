// RangeSlider.jsx
import { useCallback, useState } from "react";

interface RangeSliderController {
  title: string;
  description: string;
  min: number;
  max: number;
  step: number;
  onChange: (min: number, max: number) => void;
}

const RangeSlider = ({
  title,
  description,
  min,
  max,
  step,
  onChange,
}: RangeSliderController) => {
  const [minValue, setMinValue] = useState<number>(min);
  const [maxValue, setMaxValue] = useState<number>(max);
  const [isDraggingMin, setIsDraggingMin] = useState<boolean>(false);
  const [isDraggingMax, setIsDraggingMax] = useState<boolean>(false);

  const getPercentage = useCallback(
    (value: number) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const sliderWidth = e.currentTarget.clientWidth;
      const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const newValue =
        min + Math.round(((offsetX / sliderWidth) * (max - min)) / step) * step;

      if (isDraggingMin) {
        if (newValue >= min && newValue <= maxValue - step) {
          setMinValue(newValue);
          onChange(newValue, maxValue);
        }
      } else if (isDraggingMax) {
        if (newValue <= max && newValue >= minValue + step) {
          setMaxValue(newValue);
          onChange(minValue, newValue);
        }
      }
    },
    [isDraggingMin, isDraggingMax, min, max, step, minValue, maxValue, onChange]
  );

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  return (
    <>
      <h1 className="text-md mb-4">{title}</h1>

      <div
        className="flex flex-col items-center  select-none px-3"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
       
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className="absolute h-full bg-bgst-500 rounded"
            style={{
              left: `${getPercentage(minValue)}%`,
              width: `${getPercentage(maxValue) - getPercentage(minValue)}%`,
            }}
          ></div>

          <div
            className="absolute w-4 h-4 bg-bgst-500 rounded-full cursor-pointer transform -translate-x-1/2 top-1/2 -translate-y-1/2 hover:size-6 transition-all"
            style={{ left: `${getPercentage(minValue)}%` }}
            onMouseDown={() => setIsDraggingMin(true)}
          ></div>

          <div
            className="absolute w-4 h-4 bg-bgst-500 rounded-full cursor-pointer transform -translate-x-1/2 top-1/2 -translate-y-1/2 hover:size-6 transition-all"
            style={{ left: `${getPercentage(maxValue)}%` }}
            onMouseDown={() => setIsDraggingMax(true)}
          ></div>
        </div>
         <div className="text-sm font-light mt-2">
          {description}: {minValue} - {maxValue}
        </div>
      </div>
    </>
  );
};

export default RangeSlider;