
// define the action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// we have to create the action creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

// action for the decrement

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

// actions for adding todo
export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: task, //task text which is going to sent to reducer
  }
}


//action creator for the removing the todo

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  }
}