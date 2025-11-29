// const[state, dispatch] = useReducer(reducer, initialState);


export const initialState = {count: 0};

// define the action types as contants
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";



export function counterReducer(state, action){
// based on the action type state will be updating
    switch(action.type) {
        case INCREMENT:
            return {count: state.count + 1}
        case DECREMENT:
            return {count: state.count - 1};
        case RESET:
            return {count: 0}
        default:
            return state;

    }

}