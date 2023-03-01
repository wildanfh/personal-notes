import React from "react";
import { showFormattedDate } from "../utils";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <NoteItemAction id={id} onArchive={onArchive} onDelete={onDelete} archived={archived} />
    </div>
  );
}

export default NoteItem;
