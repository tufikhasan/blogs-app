import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Blog, About } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:id" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
