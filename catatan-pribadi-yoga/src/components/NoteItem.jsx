import React from "react";
import NoteTextItem from "./NoteTextItem";
import NoteTitleItem from "./NoteTitleItem";
import DeleteButton from "./DeleteButton";

function NoteItem({title, body, id, onDelete}) {
    return (
        <div className="note-item">
            <NoteTitleItem title={title}/>
            <NoteTextItem body={body}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )  
}

export default NoteItem;