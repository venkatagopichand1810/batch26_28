
import {useDispatch, useSelector} from "react-redux";
import { addTodo, removeTodo } from "../redux/actions/counterActions";
import { useState } from "react";

function TodoApp() {
    // local state for the input text
    const[task, setTask] = useState("");

    // useselector
    const todos = useSelector((state) => state.todos)

    //useDispatch
    const dispatch = useDispatch();

    // create the function to handle the adding todo

    const handleAddTodo = () => {
        if(task.trim() !== ""){
            dispatch(addTodo(task)); //dispatch the action to add the task
            setTask(""); //clear the input field
        }
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder="Enter the task"
                value={task}
                onChange = {(e) => setTask(e.target.value)}
            />

            <button onClick={handleAddTodo}>
                Add Todo
            </button>

            {/* show the todo list */}
            <ul>
                {todos.map((todo) => (
                    <li key = {todo.id}>
                        {todo.task}
                        <button 
                            onClick = {() => dispatch(removeTodo(todo.id))}>
                                Remove
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TodoApp