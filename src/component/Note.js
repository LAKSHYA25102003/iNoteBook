import React from 'react'
import NoteItem from './NoteItem';
import  NoteContext  from '../context/notes/NoteContext';
import { useContext } from 'react';
import { useEffect } from 'react';


function Note() {

    const context=useContext(NoteContext);
    const  {notes,getNote}=context;
    useEffect(()=>{
        getNote();
    },[]);

    
    return (
        <>
            <div className='container my-3'><h2>Your Notes</h2></div>
            <div className="container row my-3" style={{ marginBottom: 5 }}>

                {
                    notes.map((note) => {
                        return (
                            <NoteItem note={note} key={note._id}  />
                        );
                    })
                }
            </div>
        </>
    )
}

export default Note

