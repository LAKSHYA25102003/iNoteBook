import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    // const s1={
    //     name:"lakshya",
    //     class:"12"
    // }
    // const [state,setState]=useState(s1);
    // const update=()=>{
    //     const fn=()=>{
    //         setState({
    //             name:"neeraj",
    //             class:"10"
    //         })
    //     }
    //    setInterval(fn,1000);
    // }
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);


    // getNote
    const getNote = async () => {
        const url = "http://localhost:5000/api/notes/fetch-all-notes";
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MGNjNWI2ODdjZTVhYjgyZTY3MWE0In0sImlhdCI6MTY1Mzg0NTcwMH0.zW7vjnV2VR7WiM1uBxrFIBRu_CRz20Me6_1Gigt2ok0'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const json = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(json);
    }


    // function to add a note
    const addNote = async (title, description, tag) => {
        const data={
            title:title,
            description:description,
            tag:tag
        }
        const url = "http://localhost:5000/api/notes/add-notes";
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MGNjNWI2ODdjZTVhYjgyZTY3MWE0In0sImlhdCI6MTY1Mzg0NTcwMH0.zW7vjnV2VR7WiM1uBxrFIBRu_CRz20Me6_1Gigt2ok0'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        getNote();
    }


    // function to delete note
    const deleteNote = async (id) => {
        const url = `http://localhost:5000/api/notes/delete-note/${id}`;
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MGNjNWI2ODdjZTVhYjgyZTY3MWE0In0sImlhdCI6MTY1Mzg0NTcwMH0.zW7vjnV2VR7WiM1uBxrFIBRu_CRz20Me6_1Gigt2ok0'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const json = await response.json();
        getNote();
    }


    // function to update note
    const updateNote=async (id,title,description,tag)=>{
        
        const data={
            title:title,
            description:description,
            tag:tag
        }
        const url = `http://localhost:5000/api/notes/update-note/${id}`;
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MGNjNWI2ODdjZTVhYjgyZTY3MWE0In0sImlhdCI6MTY1Mzg0NTcwMH0.zW7vjnV2VR7WiM1uBxrFIBRu_CRz20Me6_1Gigt2ok0'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        getNote();  
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, getNote ,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;