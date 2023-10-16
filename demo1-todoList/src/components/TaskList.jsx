import { useSelector } from "react-redux"
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasks = useSelector(state => state.task.tasks) // le deuxième "tasks" est notre liste de tâches
    console.log(tasks);

    return(
        <>
            {
                tasks.map((task, key) => (
                    <TaskItem task={task} key={key} />
                ))
            }
        </>

    )
}

export default TaskList