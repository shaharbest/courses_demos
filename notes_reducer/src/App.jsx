import { useState } from "react";

const defaultNotes = [
  { content: 'go to gym' },
  { content: 'buy milk' },
  { content: 'look at the bright side' },
];

export default function App() {
  const [notes, setNotes] = useState(defaultNotes);
  const [newNoteInputVal, setNewNoteInputVal] = useState('');

  function handleDeleteNote(noteIndexToDelete) {
    setNotes(notes.filter((_, index) =>
      index !== noteIndexToDelete));
  }

  function handleNewNote(event) {
    event.preventDefault();
    setNotes([ ...notes, { content: newNoteInputVal } ]);
    setNewNoteInputVal('');
  }

  const notesElements = notes.map((n, index) =>
    <Note key={index} noteData={n}
      onDeleteNote={() => handleDeleteNote(index)} />);

  return <>
    <h1>Notes</h1>
    <form onSubmit={handleNewNote}>
      <input type="text"
        value={newNoteInputVal}
        onChange={e => setNewNoteInputVal(e.target.value)} />
      <button>add note</button>
    </form>
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