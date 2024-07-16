import React from 'react';
import './App.css';
import Header from './components/Header';
// import HomeSlider from './components/HomeSlider';
import About from './components/AboutUs';
import Admissions from './components/Admissions';
import Academics from './components/Academics';
import Hostels from './components/Hostels';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeSlider /> */}
      <About />
      <Admissions />
      <Academics />
      <Hostels />
      <Contact />
    </div>
  );
}

export default App;
