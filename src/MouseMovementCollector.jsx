// MouseMovementCollector.jsx
import React, { useState, useEffect } from 'react';

const MouseMovementCollector = ({ children, onMovement }) => {
  const handleMouseMove = (event) => {
    onMovement({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <>{children}</>;
};

export default MouseMovementCollector;