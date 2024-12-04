export const getPercentage = (value: number, min: number, max: number) => {
    if (max === min) {
      return 0; // Prevent division by zero
    }
    return ((value - min) / (max - min)) * 100;
  };
