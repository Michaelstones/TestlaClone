import React from 'react';
import './App.css';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Header from './Components/header'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
  </div>
  );
}

export default App;
