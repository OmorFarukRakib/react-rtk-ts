import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import usersReducer from "../features/users/usersSlice";
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        users: usersReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch