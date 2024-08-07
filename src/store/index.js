import { configureStore, createSlice} from "@reduxjs/toolkit";

const userSclice = createSlice({
    name: "user",
    initialState: { isLogegdIn:false},
    reducers:{
        login(state){
            state.isLogegdIn = true;
        },
        logout(state){
            localStorage.removeItem("userId");
            state.isLogegdIn = false;
        },
    },
});

const adminSclice = createSlice({
    name:"auth",
    initialState:{isLogegdIn:false},
    reducers:{
        login(state){
            localStorage.removeItem("adminId");
            localStorage.removeItem("token");
            state.isLogegdIn = true;
        },
        logout(state){
            localStorage.removeItem("adminId")
            localStorage.removeItem("token");
            state.isLogegdIn = false;
        },
    }
})

export const userActions = userSclice.actions;
export const adminActions = adminSclice.actions;

export const store = configureStore({
    reducer:{
        user: userSclice.reducer,
        admin:adminSclice.reducer
    },
})