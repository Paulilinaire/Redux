import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import albumItemsSlice from "./components/albums/albumItemsSlice";
import filterSlice from "./components/filter/filterSlice";



export default configureStore({
    reducer: {
        auth: authSlice,
        albums: albumItemsSlice,
        albumFilter: filterSlice
    }
})