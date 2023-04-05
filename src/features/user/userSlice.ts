import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type UserType = {
  id: number,
  name: string
}

type InitialStateType = {
  loading: boolean,
  users: UserType[],
  error: string
  
}

const initialState: InitialStateType = {
  loading: true,
  users: [],
  error: "",
};

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user:UserType) => user));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      (state.users = []), (state.error = "");
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action : PayloadAction<UserType[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || 'Something Went wrong'
      });
  },
});

export default userSlice.reducer;
// export { fetchUsers } = userSlice.actions
