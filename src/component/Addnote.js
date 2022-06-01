import React from "react";
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';
import { useState } from 'react';

const Addnote = () => {
    const context = useContext(NoteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const onChange = (event) => {
        event.preventDefault();
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    const handleClick = (event) => {
        event.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
            </form>
        </div>
    );
}

export default Addnote;
