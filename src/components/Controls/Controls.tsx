import React, {memo} from "react"
import s from './Controls.module.scss'

export const Controls: React.FC<{ onStartPause: () => void, onReset: () => void, isRunning: boolean }> = ({
                                                                                                            onStartPause,
                                                                                                            onReset,
                                                                                                            isRunning
                                                                                                          }) => (
  <div className={s.controlsContainer}>
    <button className={s.timerButton} onClick={onStartPause}>
      {isRunning ? 'Пауза' : 'Старт'}
    </button>
    <button className={s.timerButton} onClick={onReset}>Сброс</button>
  </div>
)
export const MemoizedControls = memo(Controls)