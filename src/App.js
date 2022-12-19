import './App.css';
import React  from 'react';
import {Routes, Route } from "react-router-dom"
// import Navbar from './compinents/navbar/navbar'; 
// import DefaultLayout from './layout/DefaultLayout/DefaultLayout';
import Home from './pages/Home/index';
import Add  from './pages/add/Add';
import Navbar from './compinents/navbar/navbar';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={< Add/>} />  
          <Route path='/users/:id' element={<Detail/>}/>
        </Routes>
      </div>
    // </Router>
  );
}

export default App;