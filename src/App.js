import React from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import './App.css';
import Table from './components/Table';
import Footer from './components/Footer/Footer.jsx';
import CardContainer from "./components/CardContainer";
import logo from "./assets/images/svg/logo.svg";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*<Header/>*/}
                <header className={"header-container"}>
                    <Link className={"home-item"} to={"/"}><img className={"table-img"} src={logo} alt="logo"/></Link>
                    <Link className={"home-item"} to={"/"}>Home</Link>
                    <Link className={"home-item"} to={"/game"}>Learn Cards</Link>
                    <div className={"sign-items"}>
                        <Link to={'/login'}>Log in</Link>
                        <Link to={'/signup'}>Sign up</Link>
                    </div>
                </header>
                <Footer/>
            </div>


            <Switch>
                <Route exact path="/" component={Table}/>
                <Route exact path="/game" component={CardContainer}/>
                <Route><h1>404 error</h1></Route>
            </Switch>
        </BrowserRouter>

);
}

export default App;
