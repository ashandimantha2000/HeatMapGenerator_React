// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MouseMovementCollector from './MouseMovementCollector';
import HeatMapPreview from './HeatMapPreview';

const App = () => {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const savedMovements = localStorage.getItem('movements');
    if (savedMovements) {
      setMovements(JSON.parse(savedMovements));
    }
  }, []);

  const handleMovement = (movement) => {
    setMovements((prevMovements) => {
      const newMovements = [...prevMovements, movement];
      localStorage.setItem('movements', JSON.stringify(newMovements));
      return newMovements;
    });
  };

  return (
    <Router>
      <div>
        <a href="/collect" target="_blank" rel="noopener noreferrer">Collect Mouse Movements</a>
        <a href="/preview" target="_blank" rel="noopener noreferrer">Preview Heatmap</a>

        <Routes>
          <Route path="/collect" element={<MouseMovementCollector onMovement={handleMovement} />} />
          <Route path="/preview" element={<HeatMapPreview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;