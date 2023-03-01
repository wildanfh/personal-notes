import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ notes, onArchive, onDelete, addNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === false)}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === true)}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
}
export default NoteAppBody;
