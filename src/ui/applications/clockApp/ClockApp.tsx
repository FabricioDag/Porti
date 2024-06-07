import './clockApp.css';
import { useState, useEffect } from 'react';

function Clockapp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const getMilliseconds = `00${time % 1000}`.slice(-3);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}.${getMilliseconds}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Cronômetro</h1>
      <div style={{ fontSize: '2rem' }}>{formatTime(time)}</div>
      <div>
        <button onClick={startStop}>{isRunning ? 'Pausar' : 'Iniciar'}</button>
        <button onClick={reset} disabled={isRunning}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default Clockapp;
