import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" }}
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.value = action.payload
        }
        ,
        logout: ( state )=>{
            state.value = initialState.value;
        }
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { login, logout } = UserSlice.actions

