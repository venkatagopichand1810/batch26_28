import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useTaskContext } from '../context/TaskContext';
import Column from './Column';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import AddTaskForm from './AddTaskForm';
import './Board.css';

const Board = () => {
  const { tasks, moveTask } = useTaskContext();
  const [activeTask, setActiveTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const columns = [
    { id: 'todo', title: 'To Do', status: 'todo' },
    { id: 'inprogress', title: 'In Progress', status: 'inprogress' },
    { id: 'done', title: 'Done', status: 'done' },
  ];

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find((t) => t.id === active.id);
    if (!activeTask) return;

    // Check if we're over a column
    const overColumn = columns.find((col) => col.id === over.id);
    if (overColumn && activeTask.status !== overColumn.status) {
      moveTask(active.id, overColumn.status);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      setActiveTask(null);
      return;
    }

    const activeTask = tasks.find((t) => t.id === active.id);
    if (!activeTask) {
      setActiveTask(null);
      return;
    }

    // Check if we're over a column
    const overColumn = columns.find((col) => col.id === over.id);
    if (overColumn && activeTask.status !== overColumn.status) {
      moveTask(active.id, overColumn.status);
    }

    setActiveTask(null);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="board-container">
      <div className="board-wrapper">
        <header className="board-header">
          <h1 className="board-title">
            📋 Kanban Board
          </h1>
          <p className="board-subtitle">
            Organize your tasks efficiently with drag-and-drop
          </p>
        </header>

        <AddTaskForm />

        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="board-columns">
            {columns.map((column) => (
              <Column
                key={column.id}
                title={column.title}
                status={column.status}
                tasks={getTasksByStatus(column.status)}
                onTaskClick={handleTaskClick}
              />
            ))}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div style={{ transform: 'rotate(3deg) scale(1.05)' }}>
                <TaskCard task={activeTask} onTaskClick={() => {}} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {selectedTask && (
          <TaskModal task={selectedTask} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default Board;

