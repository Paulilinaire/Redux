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
            const product = state.products.find(product => product.id === action.payload)
            if (product){
                product.name = name;
                product.price = price;
            }
        }    
    }
})

export const {addProduct, deleteProduct, editProduct} = productSlice.actions
export default productSlice.reducer