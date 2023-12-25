import React from "react";

function NoteTitleItem({title}){
    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
        </div>
    )
}

export default NoteTitleItem;