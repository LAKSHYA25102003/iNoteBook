
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
    const notes = [
        {
            "_id": "6293d0ab26e6803b5d0006f9",
            "user": "6290cc5b687ce5ab82e671a4",
            "title": "first notes",
            "description": "hey what are you doing",
            "tag": "love",
            "date": "2022-05-29T19:59:39.957Z",
            "__v": 0
        },
        {
            "_id": "62949411d09dbc63a64b8769",
            "user": "6290cc5b687ce5ab82e671a4",
            "title": "second notes",
            "description": "hey what are you doing",
            "tag": "love",
            "date": "2022-05-30T09:53:21.715Z",
            "__v": 0
        },
        {
            "_id": "62949418d09dbc63a64b876b",
            "user": "6290cc5b687ce5ab82e671a4",
            "title": "third notes",
            "description": "hey what are you doing",
            "tag": "love",
            "date": "2022-05-30T09:53:28.853Z",
            "__v": 0
        }
    ]

    const [state, setState] = useState(notes);

    return (
        <NoteContext.Provider value={{notes, setState}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;