import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useEffect } from 'react'

const About=() =>{
  // react-hooks/exhaustive-deps
  // eslint-disable-next-line
  // const a=useContext(NoteContext)
  // useEffect(()=>{
  //   a.update();
  // },[]);
  return (
    <div>
      this is about about page.
      
    </div>
  )
}

export default About
