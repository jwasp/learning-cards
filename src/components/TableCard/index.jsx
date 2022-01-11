import React, {useState} from 'react';
import del from '../../assets/images/svg/delete.svg';
import edit from '../../assets/images/svg/edit.svg';
import './TableCard.css';
import FormEdit from "../FormEdit";
import {inject, observer} from "mobx-react";

const TableCard = inject(['wordStore'])(observer(({wordStore, ...props}) => {
    const [wordEditId, setWordEditId] = useState(null);
    const card = props.card;

    const handleChange = () => {
        setWordEditId(null);
    };

    const handleEditClick = (event, card) => {
        setWordEditId(card.id)
    }

    const handleDeleteClick = (wordId) => {
        console.log('trying delete', wordStore.words)
        wordStore.removeWord(wordId)
    }


    return (
        <>
            {wordEditId === card.id
                ? <>
                    <FormEdit handleCancel={handleChange} wordId={wordEditId} setEditWord={setWordEditId} {...props}/>
                </>
                : <>
                    <span>{card.english}</span>
                    <span>{card.transcription}</span>
                    <span>{card.russian}</span>
                    <span>
                        <button className={"table-button"} onClick={(event) => handleEditClick(event, card)}>
                            <img className={"table-img"} src={edit} alt="edit"/></button>
                        <button className={"table-button"}
                                onClick={(event) => handleDeleteClick(card.id)}>
                            <img className={"table-img"} src={del} alt="delete"/></button>
                    </span>
                </>
            }
        </>
    )
}))

export default TableCard;