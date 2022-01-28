import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Guest from './components/guests/Guest';
import GuestModal from './components/guests/GuestModal';
import Categories from './components/guests/Categories';
import Nigerian from './components/guests/Nigerian/Nigerian';
import Continental from './components/guests/Continental/Continental';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path = "/" element = { <Guest /> } />
            <Route path = "/modal" element = { <GuestModal /> } />
            <Route path = "/category" element = { <Categories /> } />
            <Route path = "/category/nigerian" element = { <Nigerian /> } />
            <Route path = "/category/continental" element = { <Continental /> } />
        </Routes>
    </div>
  );
}

export default App;
