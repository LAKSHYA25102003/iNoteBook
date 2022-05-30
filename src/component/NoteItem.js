import React from 'react'


function NoteItem(props) {
    const note = props.note;
    return (
        <div className='container'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}



export default NoteItem

