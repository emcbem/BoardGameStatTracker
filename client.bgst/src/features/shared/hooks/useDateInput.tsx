import { useState } from "react";

export const useDateInput = (title: string) => {
  const [date, setDate] = useState<Date>(new Date());
  return {
    date,
    setDate,
    title,
  };
};
