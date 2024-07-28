import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./app/userSlice";

let store = configureStore({
    reducer: {
        user: userSlice,
    }
});

export default store