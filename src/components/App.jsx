import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [notesArr, setArr] = useState([]);

  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNote(e) {
    setArr((prevNotes) => {
      return [...prevNotes, note];
    });
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  function deleteNote(id) {
    setArr((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        inputValue={note.title}
        textValue={note.content}
        inputChange={handleChange}
        textChange={handleChange}
        click={addNote}
      />
      {notesArr.map((noteEl, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteEl.title}
            content={noteEl.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
