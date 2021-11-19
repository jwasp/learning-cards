import React from 'react';
import './TableCard.css';

function TableCard(props) {
    return(
        <>
            <span>{props.english}</span>
            <span>{props.transcription}</span>
            <span>{props.russian}</span>
        </>
    )
}

export default TableCard;