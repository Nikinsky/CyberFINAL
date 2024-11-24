// src/redux/communitySlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const API_URL = import.meta.env.VITE_URL_REG;


export const fetchCommunity = createAsyncThunk(
    "COMMUNITY/fetchNews",
    async (_,{rejectWithValue}) => {
        try {
         const {data} = await axios.get(`${API_URL}/raspi`)
         return data
        }catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

const initialState = {
    community: null,
    status: null,
    error: null
}

export const communitySlice = createSlice({
    name: "COMMUNITY",
    initialState,
    reducers: {
        // getUser: (state,action) => {

        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommunity.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchCommunity.fulfilled, (state,action) => {
                state.status = "succeeded"
                state.community = action.payload
            })
            .addCase(fetchCommunity.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.payload
            })
    }
        
})

export const {getUser} = communitySlice.actions
export default communitySlice.reducer;