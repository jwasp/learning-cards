import React, {useState, useRef, useEffect, createRef} from 'react';
import './Card.css';

function Card(props) {
    const [clickedButton, setClickedButton] = useState(false);
    const ref = createRef();
    const handleChange = () => {
        setClickedButton(true);
        props.addLearned();
    };

    const buttonRef = useRef(null);
    useEffect(() => buttonRef.current && buttonRef.current.focus(), []);

    return (
        <div className={"container-card"}>
            <span className={"container-card_title"}>{props.english}</span>
            <span className={"container-card_transcription"}>{props.transcription}</span>
            {clickedButton
                ? <span className={"container-card_russian"}>{props.russian}</span>
                : <button className={"container-card_button"}
                          onClick={handleChange} ref={buttonRef}>показать перевод</button>}
        </div>
    )
}

export default Card;