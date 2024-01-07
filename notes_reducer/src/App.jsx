import { useState } from "react";

const defaultNotes = [
  { content: 'go to gym' },
  { content: 'buy milk' },
  { content: 'look at the bright side' },
];

export default function App() {
  const [notes, setNotes] = useState(defaultNotes);

  function deleteNote(noteIndexToDelete) {
    setNotes(notes.filter((_, index) =>
      index !== noteIndexToDelete));
  }

  const notesElements = notes.map((n, index) =>
    <Note key={index} noteData={n}
      onDeleteNote={() => deleteNote(index)} />);

  return <>
    <h1>Notes</h1>
    <div className="notes-board">
      {notesElements}
    </div>
  </>;
}

function Note({ noteData, onDeleteNote }) {
  return <div className="note">
    <button onClick={onDeleteNote}>x</button>
    <p>{noteData.content}</p>
  </div>;
}