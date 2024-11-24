import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_URL_REG

export const fetchNews = createAsyncThunk(
    "NEWS_SLICE/fetchNews",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get(`${API_URL}/news`)
            console.log(data);
            
            return data
        }catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    news: [],
    status: null,
    error: null
}


export const newsSlice = createSlice({
    name: "NEWS_SLICE",
    initialState ,
    reducers: {
        // getNews: (state,action) => {

        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchNews.fulfilled, (state,action) => {
                state.status = "succeced"
                state.news = action.payload
            })
            .addCase(fetchNews.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.payload
            })
    }
})


export const {getNews} = newsSlice.actions


export default newsSlice.reducer