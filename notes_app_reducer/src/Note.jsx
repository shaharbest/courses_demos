
export default function Note({ onRemoveClick, isSelected, onSelectedClick,
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