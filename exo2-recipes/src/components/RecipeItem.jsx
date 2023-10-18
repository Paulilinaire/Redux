import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRecipe } from "./recipe/recipeSlice";


const RecipeItem = (props) => {
    const recipe = props.recipe
<<<<<<< HEAD
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
=======
    // const titleRef = useRef()
    // const instructionsRef = useRef()
    // const cookTimeRef = useRef()
    // const prepTimeRef = useRef()
    // const ingredientsRef = useRef()
    // const [update, setUpdate] = useState(false)
    const dispatch = useDispatch()
>>>>>>> 59c11620cc35e85392e38d83e22e7c605a0f5608

    const editRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
    }

    const deleteRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
    }

    return ( 
    <>
<<<<<<< HEAD
        <div className="bg-dark border rounded border-info mt-3 p-3">
            <div className="d-flex align-items-center">
                <h5 className="">{recipe.title}</h5>            
                <span className="ms-auto badge border border-warning d-flex align items center"><i className="bi bi-watch"></i>{recipe.prepTime}min</span> 
                <span className="ms-auto badge border border-danger d-flex align items center"><i className="bi bi-fire"></i>{recipe.cookTime}min</span>
            <hr />
            </div>
            <div className="row g-3">
                <div className="col-4">
                    <h6>Ingredients</h6>
                    <ul>
                        {recipe.ingredients?.map(ingr => <li key={ingr.id}>{ingr.name}</li>)}
                    </ul>
                    </div>
            </div>
            <div className="col-8">
                <div>
                    <h6>Instructions</h6>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
            <hr />
            {
                user &&
                    <div className="text-end">
                        <button onClick={() => editRecipeHandler} className="btn btn-warning">Edit</button>
                        <button onClick={() => deleteRecipeHandler} className="btn btn-danger">Delete</button>
                    </div>
            }
=======
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
>>>>>>> 59c11620cc35e85392e38d83e22e7c605a0f5608
        </div>  
    </> 
    );
}
 
export default RecipeItem;