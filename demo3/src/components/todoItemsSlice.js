import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_DB_URL } from '../fireBaseConfig'

export const fetchTodos = createAsyncThunk(
    "todoItems/fetchTodos", // nom du fichier que l'on veut async et la fonction fetchTodos
    async () => {
        const response = await fetch(BASE_DB_URL + "/TodoList.json")
        const data = await response.json()
        const todos = []
        for (const key in data){
            todos.push({id: key, ...data[key]})
        }
        return todos
    }
)

export const postTodo = createAsyncThunk(
    "todoItems/postTodo",
    async (newTodo) => {
        const response = await fetch(BASE_DB_URL + "/TodoList.json", {
            method: "POST",
            headers: {
                "Content-Type" : "application.json"
            },
            body: JSON.stringify(newTodo)
        })
        const data = await response.json()
        return {
            id: data.name,
            ...newTodo
        }
    }
)

const todoItemsSlice = createSlice({
    name: "todoItems", // même nom que dans "todoItems/fetchTodos"
    initialState: {
        todos: []
    },
    reducers: {},
    /*
        .fulfilled -> L'action se déclenche si la requête se termine
        .rejected -> L'action se déclenche si la requête échoue
        .pending -> L'action se déclenche pendant la requête
    */
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => { //quand fetchTodos sera finie, nous remplacons ce qui été dans state.todos par ce qui a été généré
            state.todos = action.payload
            console.log(state.todos);
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })
    }
})

export default todoItemsSlice.reducer

