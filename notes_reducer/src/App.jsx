import { useState } from "react";

const defaultNotes = [
  { content: 'go to gym' },
  { content: 'buy milk' },
  { content: 'look at the bright side' },
];

export default function App() {
  const [notes, setNotes] =
    useState(defaultNotes.map(n => ({ ...n, isSelected: false })));
  const [newNoteInputVal, setNewNoteInputVal] = useState('');

  function handleDeleteNote(noteIndexToDelete) {
    setNotes(notes.filter((_, index) =>
      index !== noteIndexToDelete));
  }

  function handleNoteSelected(index, isSelected) {
    const notesClone = structuredClone(notes);
    notesClone[index].isSelected = isSelected;
    setNotes(notesClone)
  }

  function handleDeleteSelected() {
    setNotes(notes.filter(n => !n.isSelected));
  }

  function handleNewNote() {
    setNotes([ ...notes, { content: newNoteInputVal } ]);
    setNewNoteInputVal('');
  }

  const notesElements = notes.map((n, index) =>
    <Note key={index} noteData={n}
      onDeleteNote={() => handleDeleteNote(index)}
      onChangeSelected={isSelected => handleNoteSelected(index, isSelected)} />);

  return <>
    <h1>Notes</h1>
    <div className="notes-board-controls">
      <form>
        <input type="text"
          value={newNoteInputVal}
          onChange={e => setNewNoteInputVal(e.target.value)} />
        <button onClick={handleNewNote} type="button">
          add note
        </button>
      </form>
      <form>
        <button onClick={handleDeleteSelected} type="button">
          delete selected
        </button>
      </form>
    </div>
    <div className="notes-board">
      {notesElements}
    </div>
  </>;
}

function Note({ noteData, onDeleteNote, onChangeSelected }) {
  return <div className="note">
    <div className="note-header">
      <button onClick={onDeleteNote}>x</button>
      <input type="checkbox"
        onChange={e => onChangeSelected(e.target.checked)}
        checked={noteData.isSelected} />
    </div>
    <p>{noteData.content}</p>
  </div>;
}