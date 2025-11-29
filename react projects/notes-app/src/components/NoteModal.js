import { useState, useEffect } from 'react';
import './NoteModal.css';

const NoteModal = ({ note, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title || '');
      setContent(note.content || '');
      setTags(note.tags ? note.tags.join(', ') : '');
    }
  }, [note]);

  const handleSave = () => {
    if (!title.trim() && !content.trim()) {
      alert('Please add a title or content');
      return;
    }

    const tagsArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const noteData = {
      title: title.trim(),
      content: content.trim(),
      tags: tagsArray,
    };

    onSave(noteData);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="note-modal-overlay" onClick={handleOverlayClick}>
      <div className="note-modal">
        <div className="note-modal-header">
          <h2 className="modal-title">{note ? 'Edit Note' : 'New Note'}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="note-modal-body">
          <div className="form-group">
            <input
              type="text"
              className="note-input title-input"
              placeholder="Note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="form-group">
            <textarea
              className="note-textarea"
              placeholder="Start writing your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="12"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="note-input tags-input"
              placeholder="Tags (comma separated, e.g., work, personal, ideas)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <small className="input-hint">
              Separate tags with commas
            </small>
          </div>
        </div>

        <div className="note-modal-footer">
          <button className="modal-btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-btn save-btn" onClick={handleSave}>
            {note ? 'Update Note' : 'Create Note'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;

