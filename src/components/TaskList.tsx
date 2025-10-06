import { useAppSelector } from "../store/hooks";
import Taskitem from "./TaskITem";

const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <Taskitem task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
