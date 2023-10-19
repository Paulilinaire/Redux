import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SIGN_UP_URL, SIGN_IN_URL } from '../../fireBaseConfig'

export const postSetUserSignin = createAsyncThunk(
    "auth/postSetUserSignin",
    async (credentials) => {
        const response = await fetch(SIGN_IN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        console.log(data);

        localStorage.setItem("token", data.idToken)
        return credentials
    })

export const postSetUserSignup = createAsyncThunk(
    "auth/postSetUserSignup",
    async (credentials) => {
        const response = await fetch(SIGN_UP_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        if (!response.ok) {
            throw new Error("Something went wrong during the SIGN UP")
        }

        const data = await response.json()
        console.log(data);

        localStorage.setItem("token", data.idToken)
        return {
            credentials

        }
    })



const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: "Log in"
    },
    reducers: {
        setAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postSetUserSignin.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(state.user);
        })
        builder.addCase(postSetUserSignup.fulfilled, (state, action) => {
            state.authMode = action.payload
            console.log(state.authMode);
        })
    }
})
export const { setUser, removeUser, setAuthMode } = authSlice.actions
export default authSlice.reducer