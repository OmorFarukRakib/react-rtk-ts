import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cakeOrdered, cakeRestocked } from "../cake/cakeSlice";

type InitialStateType = {
  numOfIcecream: number
}

const initialState: InitialStateType = {
  numOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    icecreamOrdered: (state) => {
      state.numOfIcecream--;
    },
    icecreamRestocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    //will change icecream for cake action
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecream -= action.payload;
    });
    builder.addCase(cakeRestocked, (state, action) => {
      state.numOfIcecream += action.payload;
    });
  },
});

export default icecreamSlice.reducer;
export const { icecreamOrdered, icecreamRestocked } = icecreamSlice.actions;
