import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';

function Note() {
    const context=useContext(NoteContext);
    const {notes,setState}=context;
  return (
    <div className="container" style={{marginBottom:5}}>
        <h2>Your Notes</h2>
        {
            notes.map((note)=>{
                return(
                    <NoteItem note={note} key={note.id}/>
                );
            })
        }
    </div>
  )
}

export default Note

