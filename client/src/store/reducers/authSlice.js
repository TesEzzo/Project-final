import { createSlice } from "@reduxjs/toolkit";
import { globalMemory } from "../../utilities/globalMemory";

const auth = globalMemory.get("auth") || {
    user: null,
    token: null,
    identity: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        ...auth
    },
    reducers: {
        login: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.identity = payload.identity;

            globalMemory.set("auth", payload)
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.identity = null;

            globalMemory.remove("auth")
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;