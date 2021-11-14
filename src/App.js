import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import {cards} from "./data.js";

function App() {
  return (
    <div className="App">
      <Header />
        {cards.map((card, i) => <Card
            key={`${card.english}-${i}`} english={card.english}
            transcription={card.transcription} russioan={card.russian}/>)}
      <Footer />
    </div>
  );
}

export default App;
