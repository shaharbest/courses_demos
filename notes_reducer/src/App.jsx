import { useState } from "react";
import { defaultNotes } from "./defaultNotes";
import Board from "./Board";

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
    setNotes([...notes, { content: newNoteInputVal }]);
    setNewNoteInputVal('');
  }

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
    <Board notes={notes} handleDeleteNote={handleDeleteNote}
      handleNoteSelected={handleNoteSelected} />
  </>;
}