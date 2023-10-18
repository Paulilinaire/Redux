import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { NavLink } from 'react-router-dom';
import { BASE_DB_URL } from '../fireBaseConfig';
import { useEffect } from 'react';
import { setRecipes } from './recipe/recipeSlice';

const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const refreshRecipes = async () => {
        try {
            const response = await fetch(`${BASE_DB_URL}/Recipes.json`)

            if(!response.ok){
                throw new Error ("Something went wrong during the Get request")
            }

            const data = await response.json()

            const tmpRecipes = [] // tableau temporaire pour pouv

            for (const key in data) {
                tmpRecipes.push({id: key, ...data[key]})
            }
            dispatch(setRecipes(tmpRecipes))

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        refreshRecipes()
    },[])//on déclenche notre fonction refreshRecipe au lancement de l'app grâce au tableau vide

    return ( 
        <>
        
          <div className="col d-flex justify-content-between">
                <h3>Recipes List</h3> 
                {user && <NavLink type="button" className="btn btn-success" to={`/addRecipe`}>
                    <i class="bi bi-plus-circle"></i> Add</NavLink>}                
          </div>   
                {
                    recipes.length === 0 ? (
                        <p>Il n'y a pas de recettes</p>
                    ) :
                        recipes.map((recipe, index) => (
                            <RecipeItem recipe={recipe} key={index} />
                        ))
                    }


        </>
     );
}
 
export default RecipeList;