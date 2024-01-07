import { useState, useReducer } from "react";
import { defaultNotes } from "./defaultNotes";
import Board from "./Board";

const initialState =
  defaultNotes.map(n => ({ ...n, isSelected: false }));

function reducer(state, action) {
  if (action.type === 'delete-note') {
    const { noteIndexToDelete } = action.payload;
    return state.filter((_, index) => index !== noteIndexToDelete);
  }
  if (action.type === 'note-selection-change') {
    const { index, isSelected } = action.payload;
    const notesClone = structuredClone(state);
    notesClone[index].isSelected = isSelected;
    return notesClone;
  }
  if (action.type === 'delete-selected') {
    return state.filter(n => !n.isSelected);
  }
  if (action.type === 'new-note') {
    const { content } = action.payload;
    return [...state, { content }];
  }

  return state;
}

export default function App() {
  const [notes, dispatch] = useReducer(reducer, initialState);

  const [newNoteInputVal, setNewNoteInputVal] = useState('');

  function handleDeleteNote(noteIndexToDelete) {
    dispatch({ type: 'delete-note', payload: { noteIndexToDelete } });
  }

  function handleNoteSelected(index, isSelected) {
    dispatch({
      type: 'note-selection-change',
      payload: { index, isSelected }
    });
  }

  function handleDeleteSelected() {
    dispatch({ type: 'delete-selected' });
  }

  function handleNewNote(content) {
    dispatch({ type: 'new-note', payload: { content } });
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