import NoteCard from './NoteCard';
import './NotesList.css';

const NotesList = ({ notes, onView, onPin, onArchive, onDelete, onRestore, onPermanentDelete, filter }) => {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          {filter === 'trash' ? '🗑️' : filter === 'archived' ? '📦' : filter === 'pinned' ? '📌' : '📝'}
        </div>
        <h3 className="empty-title">
          {filter === 'trash' && 'Trash is empty'}
          {filter === 'archived' && 'No archived notes'}
          {filter === 'pinned' && 'No pinned notes'}
          {filter === 'all' && 'No notes yet'}
        </h3>
        <p className="empty-message">
          {filter === 'trash' && 'Deleted notes will appear here'}
          {filter === 'archived' && 'Archived notes will appear here'}
          {filter === 'pinned' && 'Pin important notes to see them here'}
          {filter === 'all' && 'Create your first note to get started'}
        </p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onView={onView}
          onPin={onPin}
          onArchive={onArchive}
          onDelete={onDelete}
          onRestore={onRestore}
          onPermanentDelete={onPermanentDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;

