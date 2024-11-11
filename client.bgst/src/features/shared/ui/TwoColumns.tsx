import { FC, ReactNode } from "react";

interface TwoColumnsProps {
  children: ReactNode;
}

export const TwoColumns: FC<TwoColumnsProps> = ({ children }) => {
  return (
    <div className="flex flex-row space-x-4 space-y-0 items-baseline">
      {children}
    </div>
  );
};