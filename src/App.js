import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Table from './components/Table';
import Footer from './components/Footer/Footer.jsx';
import Card from "./components/Card";
import {cards} from "../src/data.js";
import CardContainer from "./components/CardContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <CardContainer/>
            <Table/>
            <Footer/>
        </div>
  );
}

export default App;
