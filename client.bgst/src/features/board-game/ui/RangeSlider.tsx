import { useCallback, useEffect, useState } from "react";
import { getPercentage } from "../logic/getPercentage";
import { RangeSliderController } from "../types/RangeSliderController";

const RangeSlider = ({
  title,
  description,
  min,
  max,
  step,
  onChange,
}: RangeSliderController) => {
  const [minValue, setMinValue] = useState<number>(() => {
    const saved = localStorage.getItem(`${title}-min`);
    return saved !== null ? parseInt(saved, 10) : min;
  });
  const [maxValue, setMaxValue] = useState<number>(() => {
    const saved = localStorage.getItem(`${title}-max`);
    return saved !== null ? parseInt(saved, 10) : max;
  });

  const [isDraggingMin, setIsDraggingMin] = useState<boolean>(false);
  const [isDraggingMax, setIsDraggingMax] = useState<boolean>(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const sliderWidth = e.currentTarget.clientWidth;
      const offsetX = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const newValue =
        min + Math.round(((offsetX / sliderWidth) * (max - min)) / step) * step;

      if (isDraggingMin) {
        if (newValue >= min && newValue <= maxValue - step) {
          setMinValue(newValue);
        }
      } else if (isDraggingMax) {
        if (newValue <= max && newValue >= minValue + step) {
          setMaxValue(newValue);
        }
      }
    },
    [isDraggingMin, isDraggingMax, min, max, step, minValue, maxValue]
  );

  const handleMouseUp = () => {
    setIsDraggingMin(false);
    setIsDraggingMax(false);
  };

  useEffect(() => {
    localStorage.setItem(`${title}-min`, minValue.toString());
    localStorage.setItem(`${title}-max`, maxValue.toString());
    onChange(minValue, maxValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue, maxValue, title]);

  return (
    <>
      <h1 className="text-md mb-4">{title}</h1>
      <div
        className="flex flex-col items-center select-none px-3"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className="absolute h-full bg-bgst-500 rounded"
            style={{
              left: `${getPercentage(minValue, min, max)}%`,
              width: `${getPercentage(maxValue, min, max) - getPercentage(minValue, min, max)}%`,
            }}
          ></div>

          <div
            className="absolute w-4 h-4 bg-bgst-500 rounded-full cursor-pointer transform -translate-x-1/2 top-1/2 -translate-y-1/2 hover:size-6 transition-all"
            style={{ left: `${getPercentage(minValue, min, max)}%` }}
            onMouseDown={() => setIsDraggingMin(true)}
          ></div>

          <div
            className="absolute w-4 h-4 bg-bgst-500 rounded-full cursor-pointer transform -translate-x-1/2 top-1/2 -translate-y-1/2 hover:size-6 transition-all"
            style={{ left: `${getPercentage(maxValue, min, max)}%` }}
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
