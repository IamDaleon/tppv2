import React from 'react';
import  Navvie from './components/Navvie';
import  Main from './components/MainScroll';
import  About from './components/About';
import  SPBwls from './components/Spbwls';
import  WNew from './components/Newnew';
import  Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navvie />
      <Main />
      <About />
      <SPBwls />
      <WNew />
      <Footer />
    </div>
  );
}

export default App;
