import React from 'react';
import './Header.css';

function Header() {
    return(
        <div className={"header-container"}>
            <a className={"home-item"} href={'!#'}>Home</a>
            <div className={"sign-items"}>
                <a href={'!#'}>Log in</a>
                <a href={'!#'}>Sign up</a>
            </div>
        </div>
    )
}

export default Header;