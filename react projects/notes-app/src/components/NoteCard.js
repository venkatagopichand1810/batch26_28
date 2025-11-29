import './NoteCard.css';

const NoteCard = ({ note, onView, onPin, onArchive, onDelete, onRestore, onPermanentDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const truncateContent = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className={`note-card ${note.isPinned ? 'pinned' : ''}`} onClick={() => onView(note)}>
      {note.isPinned && (
        <div className="pin-indicator">
          📌 Pinned
        </div>
      )}
      
      <div className="note-card-header">
        <h3 className="note-title">{note.title || 'Untitled Note'}</h3>
        <div className="note-actions" onClick={(e) => e.stopPropagation()}>
          {!note.isTrashed && (
            <>
              <button
                className={`action-btn ${note.isPinned ? 'active' : ''}`}
                onClick={() => onPin(note.id)}
                title={note.isPinned ? 'Unpin' : 'Pin'}
              >
                📌
              </button>
              <button
                className={`action-btn ${note.isArchived ? 'active' : ''}`}
                onClick={() => onArchive(note.id)}
                title={note.isArchived ? 'Unarchive' : 'Archive'}
              >
                📦
              </button>
              <button
                className="action-btn delete-btn"
                onClick={() => onDelete(note.id)}
                title="Move to trash"
              >
                🗑️
              </button>
            </>
          )}
          {note.isTrashed && (
            <>
              <button
                className="action-btn restore-btn"
                onClick={() => onRestore(note.id)}
                title="Restore"
              >
                ↩️
              </button>
              <button
                className="action-btn permanent-delete-btn"
                onClick={() => onPermanentDelete(note.id)}
                title="Delete permanently"
              >
                ❌
              </button>
            </>
          )}
        </div>
      </div>

      <div className="note-content">
        {truncateContent(note.content)}
      </div>

      {note.tags && note.tags.length > 0 && (
        <div className="note-tags">
          {note.tags.map((tag, index) => (
            <span key={index} className="note-tag">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="note-footer">
        <span className="note-date">{formatDate(note.updatedAt)}</span>
      </div>
    </div>
  );
};

export default NoteCard;

