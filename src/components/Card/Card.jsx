import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className={"card-container"}>
            Card
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russioan}</span>
        </div>

    )
}

export default Card;