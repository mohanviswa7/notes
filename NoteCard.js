import React from 'react';

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Last Modified: {new Date(note.updatedAt).toLocaleDateString()}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;
