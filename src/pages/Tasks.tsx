import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Tasks = () => {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      {/* Input per nuovo task */}
      <TaskInput />

      {/* Lista task */}
      <TaskList />
    </div>
  );
};

export default Tasks;
