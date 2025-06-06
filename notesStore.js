import { create } from 'zustand';
import { getNotes, deleteNote as apiDeleteNote } from '../services/api';

const useNotesStore = create((set) => ({
  notes: [],
  fetchNotes: async () => {
    const notes = await getNotes();
    set({ notes });
  },
  deleteNote: async (id) => {
    await apiDeleteNote(id);
    set((state) => ({ notes: state.notes.filter(n => n.id !== id) }));
  },
}));

export default useNotesStore;
