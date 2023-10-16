import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: "product",
    initialState: {
        products:[],
    },
    reducers: {
        addProduct: (state, action) => {  
            console.log(action.payload);
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        editProduct: (state, action) => {
            const newproductlist = state.products.map((p => p.id === action.payload.id ? {id: p.id,name: action.payload.name, price: action.payload.price} : p))
            console.log(newproductlist);
            state.products = newproductlist
            console.table(state.products);
        }    
    }
})

export const {addProduct, deleteProduct, editProduct} = productSlice.actions
export default productSlice.reducer