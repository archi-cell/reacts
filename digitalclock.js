// DigitalClock.js
import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    
    // Split the time string into parts to allow for styling the colon
    return (
      <>
        <span>{hours}</span>
        <span className="no-blink">:</span>
        <span>{minutes}</span>
        <span className="no-blink">:</span>
        <span>{seconds}</span>
      </>
    );
  };

  return (
    <div className="clock-container">
      <div className="clock-header">Digital Clock</div>
      <div className="clock-display">{formatTime(currentTime)}</div>
    </div>
  );
}

export default DigitalClock;
