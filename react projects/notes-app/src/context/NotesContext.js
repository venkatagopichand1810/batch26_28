import { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes-app-data');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all'); // all, pinned, archived, trash
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (noteData) => {
    const newNote = {
      id: Date.now(),
      title: noteData.title,
      content: noteData.content,
      tags: noteData.tags || [],
      isPinned: false,
      isArchived: false,
      isTrashed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    return newNote;
  };

  const updateNote = (id, updates) => {
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, isTrashed: true, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const restoreNote = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, isTrashed: false, isArchived: false, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const permanentlyDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, isPinned: !note.isPinned, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note =>
      note.id === id
        ? { ...note, isArchived: !note.isArchived, isPinned: false, updatedAt: new Date().toISOString() }
        : note
    ));
  };

  const emptyTrash = () => {
    setNotes(notes.filter(note => !note.isTrashed));
  };

  const getAllTags = () => {
    const tagsSet = new Set();
    notes.forEach(note => {
      if (!note.isTrashed) {
        note.tags.forEach(tag => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet).sort();
  };

  const getFilteredNotes = () => {
    let filtered = notes;

    // Filter by status
    switch (filter) {
      case 'pinned':
        filtered = filtered.filter(note => note.isPinned && !note.isTrashed && !note.isArchived);
        break;
      case 'archived':
        filtered = filtered.filter(note => note.isArchived && !note.isTrashed);
        break;
      case 'trash':
        filtered = filtered.filter(note => note.isTrashed);
        break;
      default:
        filtered = filtered.filter(note => !note.isTrashed && !note.isArchived);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
      );
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(note => note.tags.includes(selectedTag));
    }

    // Sort: pinned first, then by updated date
    return filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  };

  const value = {
    notes,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    addNote,
    updateNote,
    deleteNote,
    restoreNote,
    permanentlyDeleteNote,
    togglePin,
    toggleArchive,
    emptyTrash,
    getAllTags,
    getFilteredNotes,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};

