import React, {useState} from 'react';
import './Card.css';

function Card(props) {
    const [clickedButton, setClickedButton] = useState(false);
    const handleChange = () => {
        setClickedButton(true);
    };
    return (
        <div className={"container-card"}>
            <span className={"container-card_title"}>{props.english}</span>
            <span className={"container-card_transcription"}>{props.transcription}</span>
            {clickedButton
                ? <span className={"container-card_russian"}>{props.russian}</span>
                : <button className={"container-card_button"}
                          onClick={handleChange}>показать перевод</button>}
        </div>
    )
}

export default Card;