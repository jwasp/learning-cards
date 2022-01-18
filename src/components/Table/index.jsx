import React, {useEffect} from 'react';
import s from './Table.module.scss';
import TableCard from "../TableCard";
import {inject, observer} from "mobx-react";
import FormAddWord from "../FormAddWord";

const Table = inject(['wordStore'])(observer(({wordStore}) => {

        if(wordStore.isLoading) return <h5>is loading...</h5>
        return (
            <div className={s.table_container}>
                <span>english</span>
                <span>transcription</span>
                <span>russian</span>
                <span>buttons</span>
                <FormAddWord/>
                {wordStore.words.map((card, i) => <TableCard
                    key={`${card.english}-${i}`} english={card.english}
                    transcription={card.transcription} russian={card.russian} card={card}/>)}
            </div>
        )
    }
))

export default Table;