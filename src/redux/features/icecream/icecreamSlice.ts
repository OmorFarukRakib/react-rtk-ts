import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  InitialIcecreamType } from './icecreamType'
import { cakeOrder } from '../cake/cakeSlice'


const initialState: InitialIcecreamType = {
    numOfIcecream : 0
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        icecreamOrder: (state, action : PayloadAction<number | undefined>) => {
            if(action.payload){
                let newValue = state.numOfIcecream - action.payload
                if(newValue>=0){
                    state.numOfIcecream = newValue
                }
            }else{
                let newValue = state.numOfIcecream-1
                if(newValue>=0){
                    state.numOfIcecream = newValue
                }           
            }
        },
        icecreamRestock: (state, action : PayloadAction<number | undefined>) => {
            if(action.payload){
                state.numOfIcecream = state.numOfIcecream + action.payload
            }else{
                state.numOfIcecream++
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrder, (state, action) => {
            state.numOfIcecream--;
        })
    }
})

export default icecreamSlice.reducer
export const { icecreamOrder, icecreamRestock } = icecreamSlice.actions
