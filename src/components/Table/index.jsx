import React from 'react';
import './Table.css';
import TableCard from "../TableCard";
import {cards} from "../../data";

function Table(props) {
    return(
        <div className={"table-container"}>
            <span>english</span>
            <span>transcription</span>
            <span>russian</span>
            <span>buttons</span>
            {cards.map((card, i) => <TableCard
                key={`${card.english}-${i}`} english={card.english}
                transcription={card.transcription} russian={card.russian}/>)}
        </div>
    )
}

export default Table;