export default function Note({ noteData, onDeleteNote, onChangeSelected }) {
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