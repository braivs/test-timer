import React, { memo, useCallback, useState, useEffect, useRef } from 'react';
import './Timer.css'; // Подключаем стили

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3 минуты в секундах
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Логика таймера
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current!);
      alert('Время вышло');
    }
    return () => clearInterval(timerRef.current!);
  }, [isRunning, timeLeft]);

  // Форматируем время в MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Обработчики событий для кнопок
  const handleStartPause = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(180); // Сброс до 3 минут
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer-display">{formatTime(timeLeft)}</h1>
      <MemoizedControls onStartPause={handleStartPause} onReset={handleReset} isRunning={isRunning} />
    </div>
  );
};

const Controls: React.FC<{ onStartPause: () => void, onReset: () => void, isRunning: boolean }> = ({ onStartPause, onReset, isRunning }) => (
  <div className="controls-container">
    <button className="timer-button" onClick={onStartPause}>
      {isRunning ? 'Пауза' : 'Старт'}
    </button>
    <button className="timer-button" onClick={onReset}>Сброс</button>
  </div>
);

const MemoizedControls = memo(Controls);

export default Timer;
