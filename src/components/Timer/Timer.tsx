import React, {useCallback, useEffect, useRef, useState} from "react"
import {MemoizedControls} from "../Controls/Controls"
import s from './Timer.module.scss'

export const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(180) // 3 минуты в секундах
  const [isRunning, setIsRunning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Логика таймера
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current!)
    }
    return () => clearInterval(timerRef.current!)
  }, [isRunning, timeLeft])

  // Форматируем время в MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  // Обработчики событий для кнопок
  const handleStartPause = useCallback(() => {
    setIsRunning((prev) => !prev)
  }, [])

  const handleReset = useCallback(() => {
    setIsRunning(false)
    setTimeLeft(180) // Reset to 3 minutes
  }, [])

  return (
    <div className={s.timerContainer}>
      <h1 className={s.timerDisplay}>{formatTime(timeLeft)}</h1>
      <MemoizedControls onStartPause={handleStartPause} onReset={handleReset} isRunning={isRunning}/>
      <h1 className={s.timeFinished}>{timeLeft === 0 && <>Время вышло</>}</h1>
    </div>
  )
}