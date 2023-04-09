import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialCakeType } from './cakeType'

const initialState : InitialCakeType = {
    numOfCakes: 0
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        cakeOrder: (state, action: PayloadAction<number | undefined>) => {
            if(action.payload){
                let newValue = state.numOfCakes - action.payload
                if(newValue>=0){
                    state.numOfCakes = newValue
                }
            }else{
                let newValue = state.numOfCakes-1
                if(newValue>=0){
                    state.numOfCakes = newValue
                }           
            }
        },
        cakeRestock: (state, action: PayloadAction<number | undefined>) => {
            if(action.payload){
                state.numOfCakes = state.numOfCakes + action.payload
            }else{
                state.numOfCakes++
            }
        }
    },
})

export default cakeSlice.reducer;
export const { cakeOrder, cakeRestock } = cakeSlice.actions;