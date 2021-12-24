import React, {useState} from 'react';
import del from '../../assets/images/svg/delete.svg';
import edit from '../../assets/images/svg/edit.svg';
import './TableCard.css';
import FormEdit from "../FormEdit";

function TableCard(props) {
    const [editMode, setEditMode] = useState(false);
    const handleChange = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        console.log()
    };


    return(
        <>
            {editMode
                ? <>
                    <FormEdit handleCancel={handleChange} {...props}/>
                </>
                 : <>
                    <span>{props.english}</span>
                    <span>{props.transcription}</span>
                    <span>{props.russian}</span>
                    <span>
                        <button className={"table-button"} onClick={handleChange}><img className={"table-img"} src={edit} alt="delete"/></button>
                        <button className={"table-button"}><img className={"table-img"} src={del} alt="delete"/></button>
                    </span>
                </>
                }
        </>
    )
}

export default TableCard;