

import {DECREMENT, INCREMENT, ADD_TODO, REMOVE_TODO } from "../actions/counterActions";

// initial state of the counter (redux always needs the initial state)
const initialState = {
    count: 0, //counter is starts from 0 
};

const initialStateTodo = {
    todos: [],
}

// reducer function takes the state and action -> returns the new state

// const counterReducer = (state = initialState, action) => {
//     switch(action.type){
//         case INCREMENT:
//             return {
//                 ...state, //COPY THE OLD STATE
//                 count: state.count + 1, //INCREMENT THE COUNT...WE ARE GOING TO GET THE NEW STATE
//             };

//         case DECREMENT:
//             return {
//                 ...state, //COPY THE OLD STATE
//                 count: state.count - 1, //INCREMENT THE COUNT...WE ARE GOING TO GET THE NEW STATE
//             };
//         default:
//             return state; //retunr the current state if action is not matched
//     }

// }

const todoReducer = (state = initialStateTodo, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state, //copy the old state
                //add the new todo with the unqiue ID
                todos: [...state.todos, {id: Date.now(),task: action.payload }]
            };

        case REMOVE_TODO:
            return {
                ...state,
                // filter the todo for removing the matched todo
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state;
    }

}

export default todoReducer