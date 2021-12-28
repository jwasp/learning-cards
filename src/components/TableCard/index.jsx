import React, {useState, useContext} from 'react';
import del from '../../assets/images/svg/delete.svg';
import edit from '../../assets/images/svg/edit.svg';
import './TableCard.css';
import FormEdit from "../FormEdit";
import {WordContext} from "../../WordContext";

function TableCard(props) {
    const [wordEditId, setWordEditId] = useState(null);
    const {data, setData} = useContext(WordContext)
    const card = props.card;

    const handleChange = () => {
        setWordEditId(null)
    };

    const handleEditClick = (event, card) => {
        setWordEditId(card.id)
    }

    const handleDeleteClick = (wordId) => {
        const newWords = [...data];

        const index = data.findIndex((card)=> card.id === wordId)
        console.log(index)
        newWords.splice(index, 1);
        setData(newWords);
    }

    return(
        <>
            {wordEditId === card.id
                ? <>
                    <FormEdit handleCancel={handleChange} wordId={wordEditId} setEditWord={setWordEditId} {...props}/>
                </>
                 : <>
                    <span>{props.english}</span>
                    <span>{props.transcription}</span>
                    <span>{props.russian}</span>
                    <span>
                        <button className={"table-button"} onClick={(event)=> handleEditClick(event, card)}>
                            <img className={"table-img"} src={edit} alt="delete"/></button>
                        <button className={"table-button"}
                                onClick={(event)=>handleDeleteClick(card.id)}>
                            <img className={"table-img"} src={del} alt="delete"/></button>
                    </span>
                </>
                }
        </>
    )
}

export default TableCard;