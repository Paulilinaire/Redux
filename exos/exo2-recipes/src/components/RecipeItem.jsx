
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRecipe } from "./recipe/recipeSlice";


const RecipeItem = (props) => {
    const recipe = [props.recipe]
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    const editRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
    }

    const deleteRecipeHandler = () => {
        dispatch(setSelectedRecipe(recipe))
    }

    return ( 
    <>
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
        </div>  
    </> 
    );
}
 
export default RecipeItem;