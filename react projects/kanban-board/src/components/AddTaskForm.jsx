import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import './AddTaskForm.css';

const AddTaskForm = () => {
  const { addTask } = useTaskContext();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    tags: '',
    deadline: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    const tagsArray = formData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag);

    addTask({
      ...formData,
      tags: tagsArray,
    });

    setFormData({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
      tags: '',
      deadline: '',
    });
    setIsOpen(false);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="add-task-form">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="add-task-button"
        >
          <span className="add-task-button-icon">+</span>
          Add New Task
        </button>
      ) : (
        <div className="add-task-form-container">
          <div className="add-task-form-header">
            <h3 className="add-task-form-title">Create New Task</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="add-task-form-close"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Title <span className="form-required">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter task title"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Enter task description"
                rows="3"
                className="form-textarea"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="form-select"
                >
                  <option value="todo">To Do</option>
                  <option value="inprogress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) => handleChange('priority', e.target.value)}
                  className="form-select"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => handleChange('tags', e.target.value)}
                placeholder="e.g., urgent, bug, feature"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Deadline
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => handleChange('deadline', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="form-button form-button-cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="form-button form-button-submit"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;

