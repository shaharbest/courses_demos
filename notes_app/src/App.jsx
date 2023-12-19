import { useState } from "react";

const defaultNotes = [
  { content: 'buy milk', date: new Date(2023, 2, 10) },
  { content: 'go to gym', date: new Date(2023, 2, 11) },
  { content: 'work hard play hard', date: new Date(2023, 2, 12) },
  { content: 'work hard play hard', date: new Date(2023, 2, 12) },
  { content: 'work hard play hard', date: new Date(2023, 2, 12) },
  { content: 'work hard play hard', date: new Date(2023, 2, 12) },
];

export default function App() {
  const [notes, setNotes] =
    useState(defaultNotes.map(curNoteData => ({
      noteData: curNoteData,
      isSelected: false,
    })));
  const [noteContentInputVal, setNoteContentInputVal] =
    useState('');

  function removeNoteByIndex(noteToRemoveIndex) {
    setNotes(notes.filter((_, index) =>
      index !== noteToRemoveIndex));
  }

  function handleInsertingNote(e) {
    e.preventDefault();

    const insertedNote = {
      content: noteContentInputVal,
      date: new Date(),
    };

    setNotes([...notes, insertedNote]);
  }

  function toggleSelectedByIndex(noteIndex) {
    const editedNotes = structuredClone(notes);
    const selectedNote = editedNotes[noteIndex];
    selectedNote.isSelected = !selectedNote.isSelected
    setNotes(editedNotes);
  }

  const notesElements = notes.map((n, index) =>
    <Note noteData={n.noteData} isSelected={n.isSelected}
      key={index} onSelectedClick={() => toggleSelectedByIndex(index)}
      onRemoveClick={() => removeNoteByIndex(index)} />);

  return <main>
    <form className="new-note-form"
      onSubmit={handleInsertingNote}>
      <input type="text" value={noteContentInputVal}
        onChange={e => setNoteContentInputVal(e.target.value)} />
      <button>insert</button>
    </form>
    <form className="remove-all-selected-form">
      <button>remove selected</button>
    </form>
    <div className="notes-board">
      {notesElements}
    </div>
  </main>;
}

function Note({ onRemoveClick, isSelected, onSelectedClick,
  noteData: { content, date } }) {

  const noteStyle = isSelected ?
    { backgroundColor: 'hsl(0, 100%, 13%)' } : {};

  return <div className="note" style={noteStyle}>
    <div className="note-header">
      <button onClick={onRemoveClick}>
        X
      </button>
      <button onClick={onSelectedClick}>
        S
      </button>
    </div>
    <p>{content}</p>
    <time>{date.toLocaleDateString()}</time>
  </div>;
}