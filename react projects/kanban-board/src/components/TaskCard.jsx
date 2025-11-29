import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTaskContext } from '../context/TaskContext';
import './TaskCard.css';

const TaskCard = ({ task, onTaskClick }) => {
  const { deleteTask } = useTaskContext();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`task-card ${isDragging ? 'dragging' : ''}`}
      onClick={() => onTaskClick(task)}
    >
      <div className="task-card-header">
        <h3 className="task-card-title">{task.title}</h3>
        <button
          onClick={handleDelete}
          className="task-card-delete"
          title="Delete task"
        >
          ×
        </button>
      </div>

      {task.description && (
        <p className="task-card-description">{task.description}</p>
      )}

      <div className="task-card-tags">
        <span className={`task-card-priority ${task.priority}`}>
          {task.priority}
        </span>

        {task.tags && task.tags.length > 0 && task.tags.map((tag, index) => (
          <span key={index} className="task-card-tag">
            {tag}
          </span>
        ))}
      </div>

      {task.deadline && (
        <div className="task-card-deadline">
          📅 {new Date(task.deadline).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

export default TaskCard;

