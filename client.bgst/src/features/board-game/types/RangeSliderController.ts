export interface RangeSliderController {
    title: string;
    description: string;
    min: number;
    max: number;
    step: number;
    onChange: (min: number, max: number) => void;
  }