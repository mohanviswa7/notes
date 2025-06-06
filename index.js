import { useEffect } from 'react';
import useNotesStore from '../store/notesStore';
import NoteCard from '../components/NoteCard';

export default function Home() {
  const { notes, fetchNotes, deleteNote } = useNotesStore();

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div className="container">
      <header>
        <h1>Good Morning, User!</h1>
      </header>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
}
