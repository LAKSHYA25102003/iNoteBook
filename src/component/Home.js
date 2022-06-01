import React from 'react';
import Note from './Note';
import { useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useContext } from 'react';
import Addnote from './Addnote';

const Home = () => {
  


  return (
    <div>
      <Addnote/>
      <Note />
    </div>
  )
}

export default Home

