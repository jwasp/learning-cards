import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className={"container-card"}>
            <span className={"container-card_title"}>{props.english}</span>
            <span className={"container-card_transcription"}>{props.transcription}</span>
            <button className={"container-card_button"}>показать перевод</button>
        </div>

    )
}

export default Card;