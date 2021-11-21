import React from 'react';
import twitter from '../../assets/images/svg/twitter.svg';
import insta from '../../assets/images/svg/insta.svg';
import './Footer.css';

function Footer(props) {
    return(
        <div className={"footer"}>
            <div className={"container-icons"}>
                <img src={twitter} alt="twitter" className={"img-icon"}/>
                <img src={insta} alt="insta" className={"img-icon"}/>
            </div>
        </div>

    )
}

export default Footer;