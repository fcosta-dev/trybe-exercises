import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

export default function App() {
  return (
    <div>
      {/* Chama os dois componentes */}
      <TrafficSignal />
      <Cars/>
    </div>
  );
}
