import { useState, useEffect, useRef } from 'react';

const DragBackground = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setDragStartPosition({ x: event.clientX, y: event.clientY });
      setDragOffset({ x: 0, y: 0 });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - dragStartPosition.x;
        const newX = Math.min(Math.max(dragOffset.x + deltaX, 0), backgroundRef.current.offsetWidth);
        setDragOffset({ x: newX, y: 0 });
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, dragOffset, dragStartPosition]);

  const backgroundWidth = backgroundRef.current ? backgroundRef.current.offsetWidth : 0;
  const backgroundPosition = { left: `${dragOffset.x}px`, top: 0 };
  const backgroundColor = `rgb(${Math.round((dragOffset.x / backgroundWidth) * 255)}, 0, 0)`;

  return (
    <div ref={backgroundRef} style={{ ...backgroundPosition, backgroundColor, position: 'absolute', height: '100%', width: '100%', pointerEvents: 'none' }}>
      <div style={{ position: 'relative', height: '100%' }}>
        <div
          style={{
            width: '100px',
            height: '50px',
            background: 'red',
            position: 'absolute',
            left: `${dragOffset.x}px`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: isDragging ? 'grabbing' : 'grab',
            pointerEvents: 'all',
          }}
        />
      </div>
    </div>
  );
};

export default DragBackground;