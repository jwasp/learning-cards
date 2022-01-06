import React, {useState, useContext} from 'react';
import {default as UUID} from "node-uuid";
import './FormAddWord.css';
import save from "../../assets/images/svg/save.svg";
import {WordContext} from "../../WordContext";

function FormAddWord(props) {

    const {data, setData} = useContext(WordContext)

    const updateFormData = (event) => {
        event.preventDefault()
        setFormAddData({
            ...formAddData,
            [event.target.name]: event.target.value
        })
    };
    const [formAddData, setFormAddData] = useState({
        english: "",
        transcription: "",
        russian: "",
        tags: "",
        tags_json: ""
    });

    const handleSave = () => {
        const eng = /^[A-Za-z0-9]*$/;
        const cyrillicPattern = /^[\u0400-\u04FF]+$/;


        if(!eng.test(english)) alert("only english letters in input of english")
        else if(!cyrillicPattern.test(russian)) alert("только русские буквы в russian")
        else if(transcription[0] !== "[") alert("транскипция с квадратной скобки")
        else {
            console.log(english, transcription, russian)

        }
    }

    const handleAddWord = () => {
        const newWord = {
            id: `${formAddData.english}-${UUID.v4()}`,
            english: formAddData.english,
            transcription: formAddData.transcription,
            russian: formAddData.russian,
            tags: formAddData.tags,
            tags_json: formAddData.tags_json
        }
        const newWords = [...data, newWord];
        setData(newWords);

        fetch('/api/words/add', {
            method: 'POST',
            body: JSON.stringify(formAddData),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })

    }

    function handleAllSave() {
        handleSave(); handleAddWord()
    }

    const {english,transcription,russian} = formAddData;
    const isFormValid = english.length && transcription.length && russian.length;
    return(
        <>
            <span>
                <input value={english}
                       onChange={updateFormData}
                       className={`${!english.length?"wrong":""}`}
                       placeholder={props.english}
                       type={"text"}
                       name={"english"}
                       required/>
            </span>
            <span>
                <input value={transcription}
                       className={`${!transcription.length?"wrong":""}`}
                       onChange={updateFormData}
                       placeholder={props.transcription}
                       type={"text"}
                       name={"transcription"}
                       required/>
            </span>
            <span>
                <input
                    value={russian}
                    className={`${!russian.length?"wrong":""}`}
                    onChange={updateFormData}
                    placeholder={props.russian}
                    type={"text"}
                    name={"russian"}
                    required/>
            </span>
            <span>
                        <button className={"table-button"}
                                onClick={handleAllSave}
                        >
                            <img
                                className={`table-img ${!isFormValid?"blockButton":""}`}
                                 src={save}
                                 alt="save"/>
                        </button>
                    </span>
        </>
    )
}


export default FormAddWord;