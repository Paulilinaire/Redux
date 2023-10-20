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
            if(!response.ok) {
                throw new Error("Something went wrong during the POST recipe request")
            }
            const data = await response.json()
            return {
                id: data.name, ...newAlbum
        }
    }
)


export const patchAlbum = createAsyncThunk(
    "albumItems/patchAlbum",
    async (album) => {
        const token = localStorage.getItem("token")
        const response = await fetch(BASE_DB_URL + `/Albums/${album.id}.json?auth=${token}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application.json",
            },
            body: JSON.stringify(album)
        })
        if(!response.ok) {
            throw new Error("Something went wrong during the PATCH recipe request")
        }
        const data = await response.json()
        return {
            id: data.title, 
            ...album
        }
    }
    )
    
    export const deleteAlbum = createAsyncThunk(
        "albumItems/deleteAlbum",
        async(selectedAlbum) => {      
            const token = localStorage.getItem("token")
            const response = await fetch(BASE_DB_URL + `/Albums/${selectedAlbum.id}.json?auth=${token}`, {
                method: "DELETE"
            })
            if(!response.ok) {
                throw new Error("Something went wrong during the DELETE recipe request")
            }
            const data = await response.json()
            return selectedAlbum.id
    
        }
    
    )

const albumItemsSlice = createSlice({
    name: "albumItems",
    initialState: {
        formMode: "",
        albums: [],
        filteredAlbums: [],
        selectedAlbum: null
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
        },
        setSelectedAlbum: (state, action) => {
            state.selectedAlbum = action.payload
        },
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
                state.albums = [...state.albums.filter(album => album.id !== action.payload.id), action.payload]
            }
        })        
        // delete album
        builder.addCase(deleteAlbum.fulfilled, (state, action) => { 
            console.log("test");
            let foundAlbum = state.albums.find(a => a.id === action.payload)
            if (foundAlbum) {
                state.albums = state.albums.filter(a => a.id !== action.payload)
            }
        })
        }
})

export default albumItemsSlice.reducer
export const {setFormMode, setSelectedAlbum, setFilteredAlbums}= albumItemsSlice.actions