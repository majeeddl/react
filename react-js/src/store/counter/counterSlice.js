import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        // Redux toolkit use Immer,so we can change state without any concern
        increment :(state)=>{
            state.value+= 1;
        },
        decrement : (state)=>{
            state.value-=1;
        },
        incrementByAmount : (state,action)=>{
            state.value += action.payload;
        }
    }
});

export const { increment , decrement, incrementByAmount} = counterSlice;

//export reducer
export default counterSlice.reducer;
