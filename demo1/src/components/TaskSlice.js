import { createSlice } from '@reduxjs/toolkit'

// Ici, nous centraliserons et traiterons les différentes données

const taskSlice = createSlice(
    {
        name: "task",
        // ici, nous avons nos states
        initialState: {
            tasks: [
                { id: 1, text: "Faire les courses", done: false },
                { id: 2, text: "Faire le menage", done: true },
            ],
            counterTask: 0
        },
        reducers: { 
        // ici, nous stockons nos fonctions
        // state : pour accéder à nos tasks et counterTask
        // action : élément envoyé à notre store {type: "task/addTask", payload } => cela est géré en arrière plan
        // payload : est un objet contenant les paramètres de la fonction (on passe par action et le payload pour appeler l'argument que l'on passe dans notre fonction)
            addTask: (state, action) => { 
                const newTask = {
                    id: Date.now(),
                    text: action.payload,
                    done: false
                }

                state.tasks.push(newTask)
                state.counterTask += 1
            },
            deleteTask: (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload) 
                // avec state.tasks on récupère le tableau de nos tâches, avec filter on parcourt le tableau, et on filtre l'id de la tache différent de l'id dans le payload (=action.payload) 
            },
            toggleTask: (state, action) => {
                const task = state.tasks.find(task => task.id === action.payload)
                // idem ici on parcourt le tableau des tâches et avec le .find on va stocker dans la const task, l'id égale à l'id dans le payload
                task.done = !task.done 
            }
        }
    }
)

export const {addTask, deleteTask, toggleTask} = taskSlice.actions // pour exporter nos actions = fonctions 
export default taskSlice.reducer // ici on exporte le reducer qui donnera accés à notre initialState