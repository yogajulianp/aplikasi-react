import React from 'react';

function DeleteButton({id, onDelete}) {
    return <button onClick={()=> onDelete(id)}>X</button>
}

export default DeleteButton