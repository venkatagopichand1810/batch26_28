import { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './TaskModal.css';

const TaskModal = ({ task, onClose }) => {
  const { updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleSave = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedTask({ ...editedTask, [field]: value });
  };

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setEditedTask({ ...editedTask, tags: tagsArray });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Task Details</h2>
          <button
            onClick={onClose}
            className="modal-close"
          >
            ×
          </button>
        </div>

        <div className="modal-content">
          {/* Title */}
          <div className="modal-field">
            <label className="modal-label">Title</label>
            {isEditing ? (
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="modal-input"
              />
            ) : (
              <p className="modal-value large">{task.title}</p>
            )}
          </div>

          {/* Description */}
          <div className="modal-field">
            <label className="modal-label">Description</label>
            {isEditing ? (
              <textarea
                value={editedTask.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows="4"
                className="modal-textarea"
              />
            ) : (
              <p className={`modal-value ${!task.description ? 'empty' : ''}`}>
                {task.description || 'No description'}
              </p>
            )}
          </div>

          {/* Status */}
          <div className="modal-field">
            <label className="modal-label">Status</label>
            {isEditing ? (
              <select
                value={editedTask.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="modal-select"
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            ) : (
              <span className="modal-status-badge">
                {task.status === 'todo' ? 'To Do' : task.status === 'inprogress' ? 'In Progress' : 'Done'}
              </span>
            )}
          </div>

          {/* Priority */}
          <div className="modal-field">
            <label className="modal-label">Priority</label>
            {isEditing ? (
              <select
                value={editedTask.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
                className="modal-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            ) : (
              <span className={`modal-priority-badge ${task.priority}`}>
                {task.priority}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="modal-field">
            <label className="modal-label">Tags (comma-separated)</label>
            {isEditing ? (
              <input
                type="text"
                value={editedTask.tags?.join(', ') || ''}
                onChange={handleTagsChange}
                placeholder="e.g., urgent, bug, feature"
                className="modal-input"
              />
            ) : (
              <div className="modal-tags">
                {task.tags && task.tags.length > 0 ? (
                  task.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="modal-value empty">No tags</span>
                )}
              </div>
            )}
          </div>

          {/* Deadline */}
          <div className="modal-field">
            <label className="modal-label">Deadline</label>
            {isEditing ? (
              <input
                type="date"
                value={editedTask.deadline ? editedTask.deadline.split('T')[0] : ''}
                onChange={(e) => handleChange('deadline', e.target.value)}
                className="modal-input"
              />
            ) : (
              <p className="modal-value">
                {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No deadline set'}
              </p>
            )}
          </div>

          {/* Created At */}
          <div className="modal-field">
            <label className="modal-label">Created</label>
            <p className="modal-value">{new Date(task.createdAt).toLocaleString()}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-footer">
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  setEditedTask(task);
                  setIsEditing(false);
                }}
                className="modal-button modal-button-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="modal-button modal-button-primary"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onClose}
                className="modal-button modal-button-secondary"
              >
                Close
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="modal-button modal-button-primary"
              >
                Edit Task
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;

