import React from 'react';
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Illustrations from './components/Illustrations/Illustrations';
import About from './components/About/About';

function App() {
  return (
    <div id="App">
      <Navbar />
      <Illustrations />
    </div>
  );
}

export default App;
