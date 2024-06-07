import { useState, useEffect } from 'react';
import './notification.css';

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const hasShownNotification = localStorage.getItem('hasShownNotification');
    if (!hasShownNotification) {
      setIsFirstTime(true);
      setIsVisible(true);
      localStorage.setItem('hasShownNotification', 'true');
    } else {
      setIsVisible(true);
    }
  }, []);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`notification ${isFirstTime ? 'slide-in' : ''}`}>
        <p>Olá, Seja bem vindo</p>
        <p>Notificação</p>
        <button onClick={closeNotification}>Fechar</button>
      </div>
    )
  );
};

export default Notification;
