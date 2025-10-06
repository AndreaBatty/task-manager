import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isAuthenticated: boolean,
    user: { email: string} | null
}

const savedAuth = localStorage.getItem("authState");


const initialState: AuthState = savedAuth ? JSON.parse(savedAuth) : {
    isAuthenticated: false, user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{email: string}>) => {
            state.isAuthenticated = true
            state.user ={ email: action.payload.email}
            localStorage.setItem("authState", JSON.stringify(state))
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem("authState")
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer