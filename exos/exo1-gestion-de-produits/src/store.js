import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./components/productSlice"

export default configureStore({
    reducer: {
        product: productSlice,
    }
})