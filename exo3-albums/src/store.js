import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import albumItemsSlice from "./components/albums/albumItemsSlice";



export default configureStore({
    reducer: {
        auth: authSlice,
        albums: albumItemsSlice,
    }
})