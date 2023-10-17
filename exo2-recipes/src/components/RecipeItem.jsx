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
    const dispatch = useDispatch()

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
        <div className="bg-dark border rounded border-info mt-3 mb-3 ">
            <div className="row m-3">
                <div className="col">
                    <h3>{recipe.title}</h3>
                </div>
                <div className="col text-end">
                    <i class="bi bi-fire"></i> {recipe.prepTime}min
                    <i class="bi bi-stopwatch-fill ms-3"></i> {recipe.cookTime}min
                </div>
            </div>
            <hr />
            <div className="m-3">
                <p><b>Ingredients:</b></p>
                {recipe.ingredients}
            </div>
            <div className="m-3">
                <p><b>Instructions:</b></p>
                {recipe.instructions}
            </div>
            <hr />
            <div className="text-end">
                <button className="btn btn-warning me-2 mb-3"><i class="bi bi-pencil-square"></i> Edit</button>
                <button onClick={() => dispatch(deleteRecipe(recipe.id))} className="btn btn-danger me-3 mb-3"><i class="bi bi-trash3-fill"></i> Delete</button>
            </div>
        </div>  
    </> 
    );
}
 
export default RecipeItem;