import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./component/Alert";



function App() {
 
  return (
    
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course."/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>



  );
}

export default App;
