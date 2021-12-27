import React, {useContext} from 'react';
import s from './Table.module.scss';
import TableCard from "../TableCard";
import {WordContext} from "../../WordContext";
import FormAddWord from "../FormAddWord";
function Table(props) {
    const {data} = useContext(WordContext)

    return(
        <div className={s.table_container}>
            <span>english</span>
            <span>transcription</span>
            <span>russian</span>
            <span>buttons</span>
            <FormAddWord/>
            {data.map((card, i) => <TableCard
                key={`${card.english}-${i}`} english={card.english}
                transcription={card.transcription} russian={card.russian} card={card}/>)}
        </div>
    )
}

export default Table;