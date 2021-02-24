import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer/Footer';


function App() {
  return (
  <div>
    <Header/>
    <About/>
    <Services/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default App;
