import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Companies } from './components/Companies';
import { Events } from './components/Events';
import { Layout } from './components/layouts/Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="companies/*" element={<Companies />} />
        <Route path="events" element={<Events />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  );
}

export default App;
