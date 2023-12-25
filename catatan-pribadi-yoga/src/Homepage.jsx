import React from 'react';
import NoteApp from './components/NoteApp';

function Homepage () {
        return (
            <div >
                <h1 className="note-app__header">Catatan Pribadi</h1>
                <NoteApp/>
              
            </div>
        );      
}

export default Homepage;

     