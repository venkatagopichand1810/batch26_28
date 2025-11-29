import { useState } from 'react';
import { NotesProvider, useNotes } from './context/NotesContext';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';
import NoteModal from './components/NoteModal';
import './App.css';

function AppContent() {
  const {
    filter,
    searchQuery,
    setSearchQuery,
    selectedTag,
    addNote,
    updateNote,
    deleteNote,
    restoreNote,
    permanentlyDeleteNote,
    togglePin,
    toggleArchive,
    emptyTrash,
    getFilteredNotes,
  } = useNotes();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const filteredNotes = getFilteredNotes();

  const handleCreateNote = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  const handleViewNote = (note) => {
    if (note.isTrashed) return;
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = (noteData) => {
    if (editingNote) {
      updateNote(editingNote.id, noteData);
    } else {
      addNote(noteData);
    }
  };

  const handleDeleteNote = (id) => {
    if (window.confirm('Move this note to trash?')) {
      deleteNote(id);
    }
  };

  const handlePermanentDelete = (id) => {
    if (window.confirm('Permanently delete this note? This cannot be undone.')) {
      permanentlyDeleteNote(id);
    }
  };

  const handleEmptyTrash = () => {
    if (window.confirm('Permanently delete all notes in trash? This cannot be undone.')) {
      emptyTrash();
    }
  };

  const getFilterTitle = () => {
    if (selectedTag) return `#${selectedTag}`;
    switch (filter) {
      case 'pinned': return 'Pinned Notes';
      case 'archived': return 'Archived Notes';
      case 'trash': return 'Trash';
      default: return 'All Notes';
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">📝</span>
            Notes App
          </h1>
          <button className="create-note-btn" onClick={handleCreateNote}>
            ➕ New Note
          </button>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="app-layout">
            <aside className="app-sidebar">
              <Sidebar />
            </aside>

            <div className="app-content">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />

              <div className="content-header">
                <h2 className="content-title">{getFilterTitle()}</h2>
                <div className="content-info">
                  <span className="notes-count">
                    {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}
                  </span>
                  {filter === 'trash' && filteredNotes.length > 0 && (
                    <button className="empty-trash-btn" onClick={handleEmptyTrash}>
                      🗑️ Empty Trash
                    </button>
                  )}
                </div>
              </div>

              <NotesList
                notes={filteredNotes}
                onView={handleViewNote}
                onPin={togglePin}
                onArchive={toggleArchive}
                onDelete={handleDeleteNote}
                onRestore={restoreNote}
                onPermanentDelete={handlePermanentDelete}
                filter={filter}
              />
            </div>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <NoteModal
          note={editingNote}
          onClose={() => {
            setIsModalOpen(false);
            setEditingNote(null);
          }}
          onSave={handleSaveNote}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  );
}

export default App;
