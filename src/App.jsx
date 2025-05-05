import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Program from './Components/program';
import Vijece from './Components/Vijece';
import Vijesti from './Components/Vijesti';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/*" element={<Program />} />
        <Route path="/vijece" element={<Vijece />} />
        <Route path="/vijesti" element={<Vijesti />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

