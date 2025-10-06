import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, type Task } from "../store/taskSlice"
import Input from "./Input";
import Button from "./Button";

type TaskItemProps = {
    task: Task
}

const Taskitem = ({task}: TaskItemProps) => {
    
    const dispatch = useDispatch();

    return (
        <li
            key={task.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <div className="flex">
              <Input
              wrapperClassName="mr-2"
              id={task.id}
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask({ id: task.id }))}
                
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
            </div>
            <Button
              children="Elimina"
              onClick={() => dispatch(deleteTask({ id: task.id }))}
              className="text-red-500 hover:underline"
            />
          </li>
    )
}

export default Taskitem;