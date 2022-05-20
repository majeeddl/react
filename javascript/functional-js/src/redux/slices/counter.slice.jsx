

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //redux toolkit use Immer, so we can change state without any concern
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;