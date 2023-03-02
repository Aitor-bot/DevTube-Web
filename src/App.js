import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import HomeVideos from './components/HomeVideos/HomeVideos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <div className='margins'>
      <Categories />
      <NavigationLinks />
      <HomeVideos />
    </div>
  );
}

export default App;
