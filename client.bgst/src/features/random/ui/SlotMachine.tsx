import { FC, useState } from 'react';
import { BoardGame } from '../../board-game/types/board-game';
import { BoardGameCard } from '../../board-game/ui/BoardGameCard';

interface SlotMachineProps {
  options: BoardGame[];
}

export const SlotMachine: FC<SlotMachineProps> = ({ options }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [finalValue, setFinalValue] = useState<BoardGame | null>(null);

  const startSlotMachine = () => {
    setIsAnimating(true);
    setFinalValue(null);
    const animationSpeed = 100; 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, animationSpeed);

    const duration = 3000;
    setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);

      const randomIndex = Math.floor(Math.random() * options.length);
      setFinalValue(options[randomIndex]);
      setCurrentIndex(randomIndex);
    }, duration);
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" rounded flex items-center justify-center text-lg font-bold">
        <BoardGameCard boardGame={finalValue || options[currentIndex]}/>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-bgst-500 text-bgst-50 rounded hover:bg-bgst-700"
        onClick={startSlotMachine}
        disabled={isAnimating}
      >
        {isAnimating ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

