import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  numOfCakes: number
}

const initialState: InitialStateType = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    cakeOrdered: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.numOfCakes -= action.payload;
      } else {
        state.numOfCakes--;
      }
    },
    cakeRestocked: (state, action: PayloadAction<number>) => {
      // state.numOfCake += action.payload
      if (action.payload) {
        state.numOfCakes += action.payload;
      } else {
        state.numOfCakes++;
      }
    },
  },
});

export default cakeSlice.reducer;
export const { cakeOrdered, cakeRestocked } = cakeSlice.actions;
