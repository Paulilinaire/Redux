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
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.products[index] = action.payload
             }
        // findIndex parcourt le tableau products et va trouver l'id = à notre id
        // si l'index est égale à -1, cela signifie qu'il n'a rien trouvé, dans notre conditionnel on dit:
        // si index différent de -1 (donc id trouvé) alors on va chercher le tableau avec index
        }    
    }
})

export const {addProduct, deleteProduct, updateProduct} = productSlice.actions
export default productSlice.reducer