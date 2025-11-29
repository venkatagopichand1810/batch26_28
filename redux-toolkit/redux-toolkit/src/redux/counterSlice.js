
import {createSlice} from "@reduxjs/toolkit";
// initial state for the counter
const initialState = {
    value: 0,
}

// create a slice for the counter, automaticlly creates the action + reducer
const counterSlice = createSlice({
    name: "counter", //name of the slice
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
// export the reducer
export default counterSlice.reducer;
