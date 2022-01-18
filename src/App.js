import React from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import s from './App.module.scss';
import Table from './components/Table';
import Footer from './components/Footer/Footer.jsx';
import CardContainer from "./components/CardContainer";
import logo from "./assets/images/svg/logo.svg";

function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                {/*<Header/>*/}
                <header className={s.headerContainer}>
                    <Link className={s.homeItem} to={"/"}><img className={"table-img"} src={logo} alt="logo"/></Link>
                    <Link className={s.homeItem} to={"/"}>Home</Link>
                    <Link className={s.homeItem} to={"/game"}>Learn Cards</Link>
                    <div className={s.signItems}>
                        <Link to={'/login'}>Log in</Link>
                        <Link to={'/signup'}>Sign up</Link>
                    </div>
                </header>
            <Switch>
                <Route exact path="/" component={Table}/>
                <Route exact path="/game" component={CardContainer}/>
                <Route><h1>404 error</h1></Route>
            </Switch>
                <Footer/>
            </div>


        </BrowserRouter>

);
}

export default App;
