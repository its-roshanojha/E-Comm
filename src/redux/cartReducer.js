import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.products.find(item=>item.id === action.payload.id)

        if(item){
            item.quantity=+action.payload.quantity
        }else{
            state.push(action.payload);
        }
    },
    remove: (state, action) => {
      state.products = state.products.filter(item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer