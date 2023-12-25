import React from "react";
import { showFormattedDate } from "../Utils/data";


function NoteDate ({createdAt}) {

        const date = showFormattedDate(createdAt)
     
        return (
            <div className="note-item__content">
                <h2 className="note-item__date">{date}</h2>
            </div>
        )
    
}

export default NoteDate;