import { useState } from "react";
import { defaultNotes } from "./defaultNotes";
import NotesBoard from "./NotesBoard";
import NotesControls from "./NotesControls";

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

    setNotes([...notes, {
      noteData: insertedNote,
      isSelected: false,
    }]);
  }

  function toggleSelectedByIndex(noteIndex) {
    const editedNotes = structuredClone(notes);
    const selectedNote = editedNotes[noteIndex];
    selectedNote.isSelected = !selectedNote.isSelected
    setNotes(editedNotes);
  }

  function handleRemoveSelected(e) {
    e.preventDefault();
    setNotes(notes.filter(n => !n.isSelected));
  }

  return <main>
    <NotesControls
      handleInsertingNote={handleInsertingNote}
      noteContentInputVal={noteContentInputVal}
      setNoteContentInputVal={setNoteContentInputVal}
      handleRemoveSelected={handleRemoveSelected} />
    <NotesBoard
      notes={notes}
      toggleSelectedByIndex={toggleSelectedByIndex}
      removeNoteByIndex={removeNoteByIndex} />
  </main>;
}