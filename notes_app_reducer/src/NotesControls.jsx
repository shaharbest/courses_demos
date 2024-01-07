export default function NotesControls({
    handleInsertingNote,
    noteContentInputVal,
    setNoteContentInputVal,
    handleRemoveSelected }) {
    return <>
        <form className="new-note-form"
            onSubmit={handleInsertingNote}>
            <input type="text" value={noteContentInputVal}
                onChange={e => setNoteContentInputVal(e.target.value)} />
            <button>insert</button>
        </form>
        <form onSubmit={handleRemoveSelected}
            className="remove-all-selected-form">
            <button>remove selected</button>
        </form>
    </>;
}