import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_DB_URL } from '../../fireBaseConfig'

export const fetchAlbums = createAsyncThunk(
    "albumItems/fetchAlbums",
    async () => {
        const response = await fetch(BASE_DB_URL + "/Albums.json")
        const data = await response.json()
        const albums = []
        for (const key in data){
            albums.push({id: key, ...data[key]})
        }
        return albums
    }
)

export const postAlbum = createAsyncThunk(
    "albumItems/postAlbum",
    async (newAlbum) => {
        const response = await fetch(BASE_DB_URL + "/Albums.json", {
            method: "POST",
            headers: {
                "Content-Type" : "application.json"
            },
                body: JSON.stringify(newAlbum)
            })
            const data = await response.json()
            return {
                id: data.name,
                ...newAlbum
        }
    }
)

// export const deleteAlbum = createAsyncThunk(
//     "albumItems/deleteAlbum",
//     async(event) => {
//         const response = await fetch(`${BASE_DB_URL}/recipes/${selectedAlbum.id}.json?auth=${token}`, {
//             method: "DELETE"
//         })

//         if(!response.ok) {
//             throw new Error("Something went wrong during the DELETE recipe request")
//         }

//         const data = response.json()
//         return
//             deleteAlbum(selectedAlbum)
//     }

// )

const albumItemsSlice = createSlice({
    name: "albumItems",
    initialSate: {
        formMode: "",
        albums: []
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
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
        // // edit album
        // builder.addCase(patchAlbum.fulfilled, (state, action) => { 
        //     let foundAlbum = state.albums.find(album => album.id === action.payload.id)
        //     if (foundAlbum) {
        //         state.albums = [...state.albums.filter(a => a.id !== action.payload.id), action.payload]
        //     }
        // })
        // // delete album
        // builder.addCase(deletehAlbums.fulfilled, (state, action) => { 
        //     let foundAlbum = state.albums.find(album => album.id === action.payload.id)
        //     if (foundAlbum) {
        //         state.albums = state.albums.filter(a => a.id !== action.payload.id)
        //     }
        // })        
    }
})

export default albumItemsSlice.reducer
export const {setFormMode} = albumItemsSlice.actions