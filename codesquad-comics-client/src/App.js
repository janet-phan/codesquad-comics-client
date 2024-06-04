import React from 'react';
import Home from "./components/Home";
import Admin from "./components/Admin"
import Header from './shared/Header';
import Footer from './shared/Footer';

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
