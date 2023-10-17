import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { deleteRecipe, updateRecipe } from "./recipe/recipeSlice";

const RecipeItem = (props) => {
    const recipe = props.recipe
    // const titleRef = useRef()
    // const instructionsRef = useRef()
    // const cookTimeRef = useRef()
    // const prepTimeRef = useRef()
    // const ingredientsRef = useRef()
    // const [update, setUpdate] = useState(false)
    // const dispatch = useDispatch()

    // const updateRecipeHandler = (event) => {
    //     event.preventDefault()

    //     const newTitle = titleRef.current.value ? titleRef.current.value : recipe.title 
    //     const newInstructions = instructionsRef.current.value ? instructionsRef.current.value : recipe.instructions 
    //     const newCookTime = cookTimeRef.current.value ? cookTimeRef.current.value : recipe.cookTime 
    //     const newPrepTime = prepTimeRef.current.value ? prepTimeRef.current.value : recipe.prepTime
    //     const newIngredients = ingredientsRef.current.value ? ingredientsRef.current.value : recipe.ingredients

    //     const updatedRecipe =  {
    //         id: recipe.id,
    //         title: newTitle, 
    //         instructions: newInstructions, 
    //         cookTime: newCookTime, 
    //         prepTime: newPrepTime,
    //         ingredients: newIngredients 
    //     }

    //     dispatch(updatedRecipe(updatedRecipe))
    //     setUpdate(!update)
    // }

    return ( 
    <>
        <div className="bg-dark border border-info">
            <div>
                <h6>{recipe.title}</h6>
            </div>
            <div>
                {recipe.prepTime} {recipe.cookTime}
            </div>
            <hr />
            <div>
                <p><b>Ingredients</b></p>
                {recipe.ingredients}
            </div>
            <div>
                <p><b>Instructions</b></p>
                {recipe.instructions}
            </div>
            <hr />
            {/* <button onClick={() => setUpdate(!update)} className="btn btn-warning">Edit</button>
            <button onClick={() => dispatch(deleteRecipe(recipe.id))} className="btn btn-danger">Delete</button> */}
        </div>  
    </> 
    );
}
 
export default RecipeItem;