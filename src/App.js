import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Table from './components/Table';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
