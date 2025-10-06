import { useState } from "react";
import Button from "./Button";
import Input from "./Input"
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = () => {

    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (title.trim() !== "") {
          dispatch(addTask({ title }));
          setTitle("");
        }
      };
    
    return (
        <div className="flex gap-2 mb-4">
        <Input
          id={crypto.randomUUID()}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
          placeholder="Nuovo task..."
        />
        <Button
          children="Aggiungi"
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        />
      </div>
    )
}

export default TaskInput;