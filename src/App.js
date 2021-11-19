import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Table from './components/Table';
import Footer from './components/Footer/Footer.jsx';
import Card from "./components/Card";
import {cards} from "../src/data.js";

function App() {
    return (
        <div className="App">
            <Header/>
            <Card key={`${cards[0].english}`} english={cards[0].english}
                  transcription={cards[0].transcription} russian={cards[0].russian}/>
            <Table/>
            <Footer/>
        </div>
  );
}

export default App;
