import Note from "./Note";

export default function NotesBoard({ notes, toggleSelectedByIndex, removeNoteByIndex }) {
  const notesElements = notes.map((n, index) =>
    <Note noteData={n.noteData} isSelected={n.isSelected}
      key={index} onSelectedClick={() => toggleSelectedByIndex(index)}
      onRemoveClick={() => removeNoteByIndex(index)} />);

  return <div className="notes-board">
    {notesElements}
  </div>
}