import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../Utils/data";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : getInitialData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !==id);
        this.setState({notes})
    }

    onAddNoteHandler({title,body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createAt: new Date()
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="note-app__body">
                <h2 className="note-judul__form">Tambah Catatan</h2>
                <NoteInput addNote = {this.onAddNoteHandler}/>
                <h2>List Catatan</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }

}

export default NoteApp;