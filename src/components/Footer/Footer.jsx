import React from 'react';
import './Footer.css';

function Footer(props) {
    return(
        <div className={"footer"}>
            <div className={"container-icons"}>
                <img src="/src/assets/images/twitter.svg" alt="twitter" className={"img-icon"}/>
                <img src="/src/assets/images/insta.svg" alt="insta" className={"img-icon"}/>
            </div>
        </div>

    )
}

export default Footer;