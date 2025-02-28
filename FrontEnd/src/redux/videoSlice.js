import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const API_URL = import.meta.env.VITE_URL_REG;

export const getVideos = createAsyncThunk(
    'video/getVideos',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${API_URL}/video_site`)
            
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        video: [],
        status: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getVideos.pending, (state) => {
            state.status = 'loading'
        }),
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.status = 'success'
            state.video = action.payload
        }),
        builder.addCase(getVideos.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
    }
})

export default  videoSlice.reducer