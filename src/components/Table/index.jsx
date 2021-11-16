import React from 'react';
import './Table.css';
import Card from "../Card";
import {cards} from "../../data";

function Table(props) {
    return(
        <div className={"table-container"}>
            <span>english</span>
            <span>transcription</span>
            <span>russian</span>
            {cards.map((card, i) => <Card
                key={`${card.english}-${i}`} english={card.english}
                transcription={card.transcription} russian={card.russian}/>)}
        </div>
    )
}

export default Table;