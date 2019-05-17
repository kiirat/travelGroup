import React from 'react';
import './App.css';
import Header from './components/layout/Header'
import Home from './components/layout/Home'
import Footer from './components/layout/Footer'
function App() {
  return (
    <div className="App">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
