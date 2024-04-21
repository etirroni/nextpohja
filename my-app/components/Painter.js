// components/Painter.js
// components/Painter.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Painter.module.css';

const Painter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(80);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleScroll = (event) => {
      if (event.deltaY < 0) {
        // Scrolling up, increase circle size faster
        setCircleSize((prevSize) => Math.min(prevSize + 20, 300)); // Limit maximum size to 300px
      } else {
        // Scrolling down, decrease circle size faster
        setCircleSize((prevSize) => Math.max(prevSize - 20, 80)); // Ensure minimum size is 80px
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.painter}
      style={{
        left: position.x - circleSize / 2,
        top: position.y - circleSize / 2,
        width: circleSize,
        height: circleSize,
      }}
    ></div>
  );
};

export default Painter;