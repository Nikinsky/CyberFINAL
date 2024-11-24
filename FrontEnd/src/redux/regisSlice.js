// src/redux/communitySlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = import.meta.env.VITE_URL_REG

export const getUsers = createAsyncThunk(
    "USERS/getUsers",
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await axios.get(`${API_URL}/registration`)
            console.log(data)
            return data;
        }catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const postUser = createAsyncThunk(
    "USERS/postUser",
    async (data,{rejectWithValue,dispatch}) => {
        try {
            const response = await axios.post(`${API_URL}/registration`,data)
            dispatch(addUser(response.data))
            return response.data
        }catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    users: [],
    status: null,
    error: null,
    access: false,
}

export const regisSlice = createSlice({
    name: "USERS",
    initialState,
    reducers: {
        addUser: (state,action) => {
            state.users.push(action.payload)
        },
        accesAdd: (state) => {
            state.access = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(getUsers.fulfilled, (state,action) => {
                state.status = "succeded"
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            .addCase(postUser.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.payload
            })
    }
})

export const {addUser,accesAdd} = regisSlice.actions
export default regisSlice.reducer;