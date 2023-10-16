import { useSelector } from "react-redux"
import TaskForm from "./TaskForm";

const TaskHeader = () => {

    const counter = useSelector(state => state.task.counterTask)
    // avec le Hook useSelector on va chercher counterTask dans notre initialState et on va l'afficher dans notre return grâce à {counter}

    return (
        <header>
            <h1>React Todo list: </h1>
            <p>
                Tâches à faire : <strong>{counter}</strong> 
            </p>
            <TaskForm />
            <br />
        </header>
    )
}

export default TaskHeader;