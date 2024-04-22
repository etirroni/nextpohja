import React, { useState, useEffect } from 'react';
import styles from '../styles/Painter.module.css';

const Painter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [brushSize, setBrushSize] = useState(80);
  const [brushColorIndex, setBrushColorIndex] = useState(0);

  // Define an array of colors for the brush
  const brushColors = ['#AFF8D8', '#ACE7FF', '#FCC2FF'];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX+10,
        y: event.clientY+10,
      });
    };

    const handleScroll = (event) => {
      if (event.shiftKey) {
        // Change brush color when scrolling with Shift key pressed
        const newIndex = (brushColorIndex + (event.deltaY > 0 ? 1 : brushColors.length - 1)) % brushColors.length;
        setBrushColorIndex(newIndex);
      } else {
        // Change brush size when scrolling without Shift key pressed
        setBrushSize((prevSize) => Math.min(Math.max(prevSize + (event.deltaY > 0 ? 5 : -5), 80), 300)); // Limit brush size
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('wheel', handleScroll);
    };
  }, [brushColorIndex, brushColors.length]);

  return (
    <div
      className={styles.painter}
      style={{
        left: position.x - brushSize / 2,
        top: position.y - brushSize / 2,
        width: brushSize,
        height: brushSize,
        backgroundColor: brushColors[brushColorIndex],
      }}
    ></div>
  );
};

export default Painter;