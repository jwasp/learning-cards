import React, {useState, useContext} from 'react';
import {default as UUID} from "node-uuid";
import './FormAddWord.css';
import save from "../../assets/images/svg/save.svg";
import {inject, observer} from "mobx-react";
import {set} from "mobx";

const FormAddWord = inject(['wordStore'])(observer(({wordStore, ...props}) => {
    const [error, setError] = useState(false)
    const [formAddData, setFormAddData] = useState({
        english: "",
        transcription: "",
        russian: "",
        tags: "",
        tags_json: ""
    });

    const updateFormData = (event) => {
        setFormAddData({
            ...formAddData,
            [event.target.name]: event.target.value
        })
        setError(true)
    };

    const handleSave = () => {
        const eng = /^[A-Za-z0-9]*$/;
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if(!eng.test(english)) alert("only english letters in input of english")
        else if(!cyrillicPattern.test(russian)) alert("только русские буквы в russian")
        else if(transcription[0] !== "[") alert("транскипция с квадратной скобки")
        if(!eng.test(english) || !cyrillicPattern.test(russian) || transcription[0] !== "["){
            setError(true)
            return
        }
        wordStore.addWord(formAddData)
        setFormAddData({
            english: "",
            transcription: "",
            russian: ""
        })
    }

    const {english,transcription,russian} = formAddData;
    const isFormValid = english.length && transcription.length && russian.length;
    return(
        <>
            <span>
                <input value={english}
                       onChange={updateFormData}
                       className={`${!english.length&&error?"wrong":""}`}
                       placeholder={props.english}
                       type={"text"}
                       name={"english"}
                       required/>
            </span>
            <span>
                <input value={transcription}
                       className={`${!transcription.length&&error?"wrong":""}`}
                       onChange={updateFormData}
                       placeholder={props.transcription}
                       type={"text"}
                       name={"transcription"}
                       required/>
            </span>
            <span>
                <input
                    value={russian}
                    className={`${!russian.length&&error?"wrong":""}`}
                    onChange={updateFormData}
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
                                className={`table-img ${!isFormValid?"blockButton":""}`}
                                src={save}
                                alt="save"/>
                        </button>
                    </span>
        </>
    )
}))


export default FormAddWord;