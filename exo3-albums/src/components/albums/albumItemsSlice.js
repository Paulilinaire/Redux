import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_DB_URL } from '../../fireBaseConfig'

export const fetchAlbums = createAsyncThunk(
    "albumItems/fetchAlbums",
    async () => {
        const response = await fetch(BASE_DB_URL + "/Albums.json")
        const data = await response.json()
        const albums = []
        console.log(data);
        for (const key in data){
            albums.push({id: key, ...data[key]})
        }
        return albums
    }
)

export const postAlbum = createAsyncThunk(
    "albumItems/postAlbum",
    async (newAlbum) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/Albums.json?auth=${token}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application.json"
            },
                body: JSON.stringify(newAlbum)
            })
            const data = await response.json()
            return {
                id: data.name, ...newAlbum
        }
    }
)

export const patchAlbum = createAsyncThunk(
    "albumItems/patchAlbum",
    async (newAlbum) => {
        const selectedAlbum = null
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/Albums/${selectedAlbum.id}.json?auth=${token}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application.json"
            },
                body: JSON.stringify(newAlbum)
            })
            const data = await response.json()
            return {
                ...data, id: selectedAlbum.id
        }
    }
)

export const deleteAlbum = createAsyncThunk(
    "albumItems/deleteAlbum",
    async(deleteAlbum) => {
        const selectedAlbum = null
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_DB_URL}/recipes/${selectedAlbum.id}.json?auth=${token}`, {
            method: "DELETE"
        })
        const data = response.json(deleteAlbum)
        return
            deleteAlbum(selectedAlbum)
    }

)

const albumItemsSlice = createSlice({
    name: "albumItems",
    initialState: {
        formMode: "",
        albums: [],
        selectedAlbum: null,
        isLoading: false,
        error: null
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
        },
        setSelectedAlbum: (state, action) => {
            state.selectedAlbum = action.payload
        }
    },
    extraReducers: (builder) => {
        // set albums
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.albums = action.payload
        })
        // add album
        builder.addCase(postAlbum.fulfilled, (state, action) => { 
            state.albums.push(action.payload)
        })
        // edit album
        builder.addCase(patchAlbum.fulfilled, (state, action) => { 
            let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            if (foundAlbum) {
                state.albums = [...state.albums.filter(a => a.id !== action.payload.id), action.payload]
            }
        })
        // delete album
        builder.addCase(deleteAlbum.fulfilled, (state, action) => { 
            let foundAlbum = state.albums.find(album => album.id === action.payload.id)
            if (foundAlbum) {
                state.albums = state.albums.filter(a => a.id !== action.payload.id)
            }
        })        
    }
})

export default albumItemsSlice.reducer
export const {setFormMode, setSelectedAlbum} = albumItemsSlice.actions