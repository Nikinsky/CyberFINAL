import { configureStore } from "@reduxjs/toolkit";
// import { newsSlice } from "./newsSlice";
import communityReducer from "./communitySlice";
import newsSlice from "./newsSlice";
import regisSlice from "./regisSlice";




export const store = configureStore(
  {
    reducer: {
        community:communityReducer,
        news: newsSlice,
        users: regisSlice,
    }
  }
)