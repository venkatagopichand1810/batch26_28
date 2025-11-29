import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ title, status, tasks, onTaskClick }) => {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div className={`column ${status}`}>
      <div className={`column-header ${status}`}>
        <h2 className="column-title">{title}</h2>
        <span className="column-count">
          {tasks.length}
        </span>
      </div>

      <div ref={setNodeRef} className="column-content">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.length === 0 ? (
            <div className="column-empty">
              No tasks yet
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} onTaskClick={onTaskClick} />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  );
};

export default Column;

