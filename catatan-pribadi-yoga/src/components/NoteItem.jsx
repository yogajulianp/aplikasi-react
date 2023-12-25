import React from "react";
import NoteTextItem from "./NoteTextItem";
import NoteTitleItem from "./NoteTitleItem";
import DeleteButton from "./DeleteButton";
import NoteDate from "./NoteDate";


function NoteItem({title, body, createdAt, id, onDelete}) {
    return (
        <div className="note-item">
            <NoteTitleItem title={title}/>
            <NoteDate createdAt={createdAt}/>
            <NoteTextItem body={body}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )  
}

export default NoteItem;