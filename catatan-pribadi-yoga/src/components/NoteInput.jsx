import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title:'',
            body:'',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
        <form className="note-input input" onSubmit={this.onSubmitEventHandler}>
            <input className="note-input__title" type="text" placeholder="Isikan Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
            <input className="note-input__body" type="textarea" placeholder="Tulisan Catatan Anda" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
            <button className="note-input button" type="submit">Buat Catatan</button>
        </form>
        )
        
    }
    
}

export default NoteInput;