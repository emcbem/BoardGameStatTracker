import {ReactNode } from "react";

interface SideBySideProps {
  leftComponent: ReactNode;
  rightComponent: ReactNode
}

const SideBySide = ({ leftComponent, rightComponent }: SideBySideProps) => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex-1 flex items-center justify-center">{leftComponent}</div>
      <div className="flex-1 flex items-center justify-center">{rightComponent}</div>
    </div>
  );
};

export default SideBySide;