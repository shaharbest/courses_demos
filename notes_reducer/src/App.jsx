import { useState, useReducer } from "react";
import { defaultNotes } from "./defaultNotes";
import Board from "./Board";

const initialState =
  defaultNotes.map(n => ({ ...n, isSelected: false }));

const ACTIONS = {
  DELETE_NOTE: 'delete-note',
  NOTE_SELECTION_CHANGE: 'note-selection-change',
  DELETE_SELECTED: 'delete-selected',
  NEW_NOTE: 'new-note',
};

function createDeleteNoteAction(noteIndexToDelete) {
  return {
      type: ACTIONS.DELETE_NOTE,
      payload: { noteIndexToDelete }
  };
}

function createNoteSelectedAction(index, isSelected) {
  return {
      type: ACTIONS.NOTE_SELECTION_CHANGE,
      payload: { index, isSelected }
  };
}

function createDeleteSelectedAction() {
  return {
      type: ACTIONS.DELETE_SELECTED
  };
}

function createNewNoteAction(content) {
  return {
      type: ACTIONS.NEW_NOTE,
      payload: { content }
  };
}

function reducer(notes, action) {
  if (action.type === ACTIONS.DELETE_NOTE) {
    const { noteIndexToDelete } = action.payload;
    return notes.filter((_, index) => index !== noteIndexToDelete);
  }
  if (action.type === ACTIONS.NOTE_SELECTION_CHANGE) {
    const { index, isSelected } = action.payload;
    const notesClone = structuredClone(notes);
    notesClone[index].isSelected = isSelected;
    return notesClone;
  }
  if (action.type === ACTIONS.DELETE_SELECTED) {
    return notes.filter(n => !n.isSelected);
  }
  if (action.type === ACTIONS.NEW_NOTE) {
    const { content } = action.payload;
    return [...notes, { content }];
  }

  return notes;
}

export default function App() {
  const [notes, dispatch] = useReducer(reducer, initialState);
  const [newNoteInputVal, setNewNoteInputVal] = useState('');

  function handleDeleteNote(noteIndexToDelete) {
    dispatch(createDeleteNoteAction(noteIndexToDelete));
  }

  function handleNoteSelected(index, isSelected) {
    dispatch(createNoteSelectedAction(index, isSelected));
  }

  function handleDeleteSelected() {
    dispatch(createDeleteSelectedAction());
  }

  function handleNewNote(content) {
    dispatch(createNewNoteAction(content));
    setNewNoteInputVal('');
  }

  return <>
    <h1>Notes</h1>
    <div className="notes-board-controls">
      <form>
        <input type="text"
          value={newNoteInputVal}
          onChange={e => setNewNoteInputVal(e.target.value)} />
        <button onClick={() => handleNewNote(newNoteInputVal)} type="button">
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