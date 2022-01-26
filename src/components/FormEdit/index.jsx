import React, {useState, useEffect, useContext} from 'react';
import './FormEdit.css';
import save from "../../assets/images/svg/save.svg";
import cancel from "../../assets/images/svg/cancel.svg";
import {inject, observer} from "mobx-react";

const FormEdit = inject(['wordStore'])(observer(({wordStore, ...props}) => {
    const [error, setError] = useState(false)
    const [formCard, setFormCard] = useState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
    });

    const updateFormData = (event) => {
        setFormCard({
            ...formCard,
            [event.target.name]: event.target.value
        })
        setError(true)
    };

    const handleSave = () => {
        const eng = /^[A-Za-z0-9]*$/;
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;



        wordStore.updateWord(props.wordId, formCard)
        props.setEditWord(null)


        console.log(wordStore.words)
        if(!eng.test(english)) alert("only english letters in input of english")
        else if(!cyrillicPattern.test(russian)) alert("только русские буквы в russian")
        else if(transcription[0] !== "[") alert("транскипция с квадратной скобки")
        else {
            console.log(english, transcription, russian)
        }

    }


    const {english,transcription,russian} = formCard;
    console.log("formData", formCard)
    const isFormValid = english.length && transcription.length && russian.length;
    return(
        <>
            <span>
                <input value={english}
                       onChange={e => updateFormData(e)}
                       className={`${error?"wrong":""}`}
                       placeholder={props.english}
                       type={"text"}
                       name={"english"}
                       required/>
            </span>
            <span>
                <input value={transcription}
                       className={`${!transcription.length?"wrong":""}`}
                       onChange={e => updateFormData(e)}
                       placeholder={props.transcription}
                       type={"text"}
                       name={"transcription"}
                       required/>
            </span>
            <span>
                <input
                    value={russian}
                    className={`${!russian.length?"wrong":""}`}
                    onChange={e => updateFormData(e)}
                    placeholder={props.russian}
                    type={"text"}
                    name={"russian"}
                    required/>
            </span>
            <span>
                        <button className={"table-button"}
                                onClick={handleSave}
                        >
                            <img
                                className={`table-img ${!isFormValid & error ? "blockButton" : ""}`}
                                src={save}
                                alt="save"/>
                        </button>
                        <button className={"table-button"}
                                onClick={props.handleCancel}
                        >
                            <img className={"table-img"}
                                 src={cancel}
                                 alt="cancel"/>
                        </button>
                    </span>
        </>
    )
}))

export default FormEdit;
