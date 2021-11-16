import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className={"card-container"}>
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russian}</span>
        </div>

    )
}

export default Card;