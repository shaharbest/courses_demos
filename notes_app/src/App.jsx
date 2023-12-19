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
  return <main>
    <NotesBoard />
  </main>;
}

function NotesBoard() {
  const [notes, setNotes] = useState(defaultNotes);

  function removeNoteByIndex(noteToRemoveIndex) {
    setNotes(notes.filter((_, index) =>
      index !== noteToRemoveIndex));
  }

  const notesElements = notes.map((n, index) =>
    <Note noteData={n} key={index}
      onRemoveClick={() => removeNoteByIndex(index)} />);

  return <div className="notes-board">
    {notesElements}
  </div>;
}

function Note({ onRemoveClick, noteData: { content, date } }) {
  return <div className="note">
    <div className="note-header">
      <button onClick={onRemoveClick}>
        X
      </button>
    </div>
    <p>{content}</p>
    <time>{date.toLocaleDateString()}</time>
  </div>;
}