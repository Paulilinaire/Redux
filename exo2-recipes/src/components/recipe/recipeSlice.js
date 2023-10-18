import { createSlice } from '@reduxjs/toolkit'
import { ingredients } from './ingredients'

const recipeSlice = createSlice ({
    name: "recipes",
    initialState: {
        recipes: [],
        selectedRecipe : null,
        ingredients: [...ingredients],
    },
    reducers: {
        setRecipes: (state, action) => { // set pour mettre les recettes de nos base de données dans notre tableau recipes 
            state.recipes = action.payload
        },
        setSelectedRecipe: (state, action) => {
            state.selectedRecipe = action.payload
        },
        addRecipe: (state, action) => {
            const newRecipe = {
                id: Date.now(),
                title: action.payload.title,
                instructions: action.payload.instructions,
                cookTime: action.payload.cookTime,
                prepTime: action.payload.prepTime,
                ingredients: action.payload.ingredients
            }
            state.recipes.push(newRecipe)
        },
        deleteRecipe: (state, action) => {
            let foundRecipe = state.recipes.find(recipe => recipe.id === action.payload.id)
            if (foundRecipe) {
                state.recipes = state.recipes.filter(r => r.id !== action.payload.id) 
            }
        },
        updateRecipe: (state, action) => {
            let foundRecipe = state.recipes.find(recipe => recipe.id === action.payload.id)
            if (foundRecipe) {
                state.recipes = [...state.recipes.filter(r => r.id !== action.payload.id), action.payload] // remodifie le tableau recipe avec notre recette modifiée
            }
        }
    }
})

export const {setRecipes, setSelectedRecipe, addRecipe, deleteRecipe, updateRecipe} = recipeSlice.actions
export default recipeSlice.reducer