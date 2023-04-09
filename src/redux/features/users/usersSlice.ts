import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type UserType = {
    id: number,
    name: string
}

type InitialUsersType = {
    loading: boolean,
    users: UserType[],
    error: string
}

const initialState: InitialUsersType = {
    loading: false,
    users: [],
    error: ""
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (name : string) => {
    const response = await axios.get<UserType[]>(`https://jsonplaceholder.typicode.com/${name}`);
    return response.data;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true,
            state.users = [],
            state.error = ""
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ""
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message || 'Something Went Wrong'
        })
    }
})

export default usersSlice.reducer;

// export {  } = usersSlice.actions