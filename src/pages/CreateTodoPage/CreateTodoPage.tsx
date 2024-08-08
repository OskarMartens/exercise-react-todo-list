import { useState } from "react";
import "./CreateTodoPage.css";
import { ITodo, ITodoContext } from "../../interface";
import { useOutletContext } from "react-router";


export default function CreateTodo() {
const {addTodo} = useOutletContext<ITodoContext>();

  const [todoForm, setTodoForm] = useState<ITodo>({
    assignedTo: "",
    content: "",
    timeStamp: new Date().toLocaleString(),
  });

  const saveTodo = () => {
    if (todoForm.assignedTo.length > 0 && todoForm.content.length > 0) {
      setTodoForm({ ...todoForm, timeStamp: new Date().toLocaleString() });
      const newTodo: ITodo = {
        assignedTo: todoForm.assignedTo,
        content: todoForm.content,
        timeStamp: todoForm.timeStamp,
      };
      addTodo(newTodo);
    }
  };

  return (
    <div className="create-main">
      <h2>Create Todo</h2>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setTodoForm({ ...todoForm, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Who's doing it?"
        onChange={(e) =>
          setTodoForm({ ...todoForm, assignedTo: e.target.value })
        }
      />
      <button onClick={saveTodo}>Save todo</button>
    </div>
  );
}
