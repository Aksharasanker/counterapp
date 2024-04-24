import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    //name the silce component 
    name :'counterApplication',
    //initial value of the state
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside reducer key
        //increment count

        increment:(state,action)=>{
            state.value+=action.payload
        },
        //decrement count
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //reset count
        reset:(state)=>{
            state.value=0
        }
    }
    }
)
//slice returns actions as well as reducer
//action used by component
//reducer used for store
export const {increment,decrement,reset}= counterSlice.actions
//export reducer
export default counterSlice.reducer