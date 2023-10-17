import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { NavLink } from 'react-router-dom';

const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes)

    return ( 
        <>
        
          <div className="col d-flex justify-content-between">
                <h3>Recipes List</h3>
                <NavLink type="button" className="btn btn-success" to={`/addRecipe`}>
                    <i class="bi bi-plus-circle"></i> Add
                </NavLink>
          </div>   
                {
                        recipes.map((recipe, index) => (
                            <RecipeItem recipe={recipe} key={index} />
                        ))
                    }

        </>
     );
}
 
export default RecipeList;