import { useRef } from "react";
import { BASE_DB_URL } from "../fireBaseConfig";
import { useDispatch } from "react-redux";
import { addRecipe } from "./recipe/recipeSlice";

function AddRecipe (props) {
    const titleRef = useRef()
    const instructionsRef = useRef()
    const cookTimeRef = useRef()
    const prepTimeRef = useRef()
    const ingredientsRef = useRef()

    const token = localStorage.getItem("token")
    console.log(token);
    const user = props.user
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const newRecipe = {
            id: Date.now(),
            title : titleRef.current.value, 
            instructions: instructionsRef.current.value,
            cookTime : cookTimeRef.current.value,
            prepTime : prepTimeRef.current.value,
            ingredients : ingredientsRef.current.value
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

                const data = await response.json()
                console.log(data);

                dispatch(addRecipe(newRecipe))

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
                <input className="form-control" type="text" ref={titleRef}></input>
            </div>
                <div className="col-3">
                    <label htmlFor="cookTimeRecipe">Cooking time (min):</label>
                    <input className="form-control" type="number" ref={cookTimeRef}></input>
                </div>
                <div className="col-3">
                    <label htmlFor="prepTimeRecipe">Preparation time (min):</label>
                    <input className="form-control" type="number" ref={prepTimeRef}></input>
                </div>
            </div>
             <div className="mb-3">
                <label htmlFor="instructionsRecipe">Insctructions:</label>
                <input className="form-control" type="text" ref={instructionsRef}></input>
            </div>
             <div className="mb-3">
                <label htmlFor="ingredientsRecipe">Ingredients:</label>
                <input className="form-control" type="text" ref={ingredientsRef}></input>
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