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
  </main>
}

function NotesBoard() {
  const notes = defaultNotes.map(n => <Note noteData={n} />)

  return <div className="notes-board">
    {notes}
  </div>
}

function Note({ noteData: { content, date } }) {
  return <div className="note">
    <div className="note-header">
      <button>X</button>
    </div>
    <p>{content}</p>
    <time>{date.toLocaleDateString()}</time>
  </div>;
}