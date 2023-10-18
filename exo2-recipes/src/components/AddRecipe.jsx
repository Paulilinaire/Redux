import { useRef } from "react";
import { BASE_DB_URL } from "../fireBaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "./recipe/recipeSlice";

function AddRecipe () {
    const ingredients = useSelector(state => state.recipes.ingredients)
    const dispatch = useDispatch()

    const titleRef = useRef()
    const instructionsRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const ingredientsRef = useRef()

    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const selectedIngredients = []
        const token = localStorage.getItem("token")
        console.log(token);

        for (const option of ingredientsRef.current.options) {
            if (option.selected) {
                selectedIngredients.push({id: option.value, name: option.textContent})
                //textContent = pour aller chercher ce qu'il y a dans la balise ingredient.name
            }
        }

        const newRecipe = {
            title : titleRef.current.value, 
            instructions: instructionsRef.current.value,
            cookTime : +cookTimeRef.current.value, // + pour transformer en type number
            prepTime : +prepTimeRef.current.value, // + pour transformer en type number
            ingredients : selectedIngredients
        }

        if(token) {
            try {
                const response = await fetch(`${BASE_DB_URL}/Recipes.json?auth=${token}`, {
                    method: "POST", // action qu'on veut effectuer
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(newRecipe)

                })

                if(!response.ok){
                    throw new Error("Something went wrong during the POST request !")
                }

                const data = await response.json() // on récupère nos données
                console.log(data);

                dispatch(addRecipe({id: data.name, ...newRecipe})) // on recréé un objet dans id qui contiendra notre objet newRecipe

            } catch (error) {
                console.error(error.message);
            }
        }
    }


    return ( 
        <>  
            <form action="" onSubmit={handleSubmit}>
             <h1>Add Recipe</h1>
             <div className="row mt-3 mb-3">
             <div className="col-6">
                <label htmlFor="titleRecipe">Recipe name:</label>
                <input className="form-control" type="text" required ref={titleRef}></input>
            </div>
                <div className="col-3">
                    <label htmlFor="cookTimeRecipe">Cooking time (min):</label>
                    <input className="form-control" type="number" required min={1} ref={cookTimeRef}></input>
                </div>
                <div className="col-3">
                    <label htmlFor="prepTimeRecipe">Preparation time (min):</label>
                    <input className="form-control" type="number" required min={1} ref={prepTimeRef}></input>
                </div>
            </div>
             <div className="mb-3">
                <label htmlFor="instructionsRecipe">Insctructions:</label>
                <textarea className="form-control" cols={30} rows={10} required ref={instructionsRef}></textarea>
            </div>
             <div className="mb-3">
                <label htmlFor="ingredientsRecipe">Ingredients:</label>
                <select name='ingredients' id="ingredients" className="form-select" required multiple ref={ingredientsRef}>
                    {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
                </select>
            </div>
            <div className="text-end mt-3">
                <button className= "btn btn-success">Add recipe</button>
            </div>
            </form>
        </>
     );
}

export default AddRecipe;


// useEffect(() => {
//     if(id != null){
//         axios.get(`http://localhost:3002/recipes/${id}`)
//         .then((response => {
//             titleRef.current.value = response.data.title
//             instructionsRef.current.value = response.data.instructions
//             cookTimeRef.current.value = response.data.cookTime
//             prepTimeRef.current.value = response.data.prepTime
//             ingredientsRef.current.value = response.data.ingredients
//         })
//         )
//     }
// },[id])

// const handleSubmit = () => {
//     if(id != null){
//         axios.put(`http://localhost:3002/recipes/${id}`,{ 
//             title : titleRef.current.value, 
//             instructions: instructionsRef.current.value,
//             cookTime : cookTimeRef.current.value,
//             prepTime : prepTimeRef.current.value,
//             ingredients : ingredientsRef.current.value,
//           })
//         .then(response => {
//             console.log(response.data)
//             navigate("/")
//         })
//     }else{
//         axios.post('http://localhost:3002/recipes',{ 
//             title : titleRef.current.value, 
//             instructions: instructionsRef.current.value,
//             cookTime : cookTimeRef.current.value,
//             prepTime : prepTimeRef.current.value,
//             ingredients : ingredientsRef.current.value,
//           })
//         .then(response => {
//             console.log(response.data)
//             navigate("/")
//         })
//     }
// }