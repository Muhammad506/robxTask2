import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import ScrollButton from './components/ScrollButton';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import IntelliWriterPage from './components/Footer';
import Section3 from './components/Section3';


const App = () => {
  return (
    <div>
      <Navbar/>   
      <Hero1/>
      <ScrollButton/>
      <Section1/>
      <Section2/>
      <Section3/>
      <IntelliWriterPage/>
    </div>
  );
}

export default App;
