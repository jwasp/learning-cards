import React, {useState} from 'react';
import del from '../../assets/images/svg/delete.svg';
import edit from '../../assets/images/svg/edit.svg';
import save from '../../assets/images/svg/save.svg';
import cancel from '../../assets/images/svg/cancel.svg';
import './TableCard.css';

function TableCard(props) {
    const [editMode, setEditMode] = useState(false);
    const handleChange = () => {
        setEditMode(!editMode);
    };
    return(
        <>
            {editMode
                ? <>
                <span><input/></span>
                    <span><input/></span>
                    <span><input/></span>
                    <span>
                        <button className={"table-button"}><img className={"table-img"} src={save} alt="save"/></button>
                        <button className={"table-button"} onClick={handleChange}><img className={"table-img"} src={cancel} alt="cancel"/></button>
                    </span>
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