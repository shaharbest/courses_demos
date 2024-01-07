import Note from "./Notes";

export default function Board({ notes,
    handleDeleteNote, handleNoteSelected }) {
  const notesElements = notes.map((n, index) =>
    <Note key={index} noteData={n}
      onDeleteNote={() => handleDeleteNote(index)}
      onChangeSelected={isSelected =>
        handleNoteSelected(index, isSelected)} />);

  return <div className="notes-board">
    {notesElements}
  </div>
}