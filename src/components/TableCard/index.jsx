import React, {useState} from 'react';
import Edit from "./../Edit";
import Save from "./../Save";

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
                        <button onClick={handleChange}>save</button>
                        <button onClick={handleChange}>cancel</button>
                    </span>
                </>
                 : <>
                    <span>{props.english}</span>
                    <span>{props.transcription}</span>
                    <span>{props.russian}</span>
                    <span>
                        <button onClick={handleChange}>edit</button>
                        <button>delete</button>

                    </span>
                </>
                }
        </>
    )
}

export default TableCard;