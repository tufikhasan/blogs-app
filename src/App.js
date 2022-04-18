import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Blogs } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
