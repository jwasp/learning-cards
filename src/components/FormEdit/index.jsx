import React, {useState, useEffect} from 'react';
import './FormEdit.css';
import save from "../../assets/images/svg/save.svg";
import cancel from "../../assets/images/svg/cancel.svg";

function FormEdit(props) {
    const [blockButton, setBlockButton] = useState(false)
    const[wrong, setWrong] = useState(false)
    const [formData, setFormData] = useState({
        english: "",
        transcription: "",
        russian: "",
    });

    const updateFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };

    const handleSave = () => {
       const eng = /^[A-Za-z0-9]*$/;
       const cyrillicPattern = /^[\u0400-\u04FF]+$/;

        if(!eng.test(english)) alert("only english letters in input of english")
        if(!cyrillicPattern.test(russian)) alert("только русские буквы в russian")
        if(transcription[0] !== "[") alert("транскипция с квадратной скобки")
        else {
            console.log(english, transcription, russian)
            props.handleCancel() //это не работает, я хотела здесь вызвать родитльскую функцию, но не сработало. Как можно было бы сделать
        }
    }

    useEffect(() => {
        (english && transcription && russian) ? setWrong(false) : setWrong(true);
        (english && transcription && russian) ? setBlockButton(false) : setBlockButton(true) //как здесь можно было бы сократить код?
    });

    const {english,transcription,russian} = formData;

    return(
        <>
            <span>
                <input value={english}
                       onChange={e => updateFormData(e)}
                       className={`${wrong?"wrong":""}`}
                       placeholder={props.english}
                       type={"text"}
                       name={"english"}
                       required/>
            </span>
            <span>
                <input value={transcription}
                       className={`${wrong?"wrong":""}`}
                       onChange={e => updateFormData(e)}
                       placeholder={props.transcription}
                       type={"text"}
                       name={"transcription"}
                       required/>
            </span>
            <span>
                <input value={russian}
                       className={`${wrong?"wrong":""}`}
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
                            <img className={`table-img ${blockButton?"blockButton":""}`}
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
}

export default FormEdit;