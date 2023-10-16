import { configureStore } from "@reduxjs/toolkit"
import TaskSlice from "./components/TaskSlice"

// Ici nous rassomblons tous les slices

export default configureStore({
    reducer: {
        task: TaskSlice,
        //Possibilité d'importer d'autre reducer
    }
})