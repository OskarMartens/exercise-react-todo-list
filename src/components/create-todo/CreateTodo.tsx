import React, { useState } from "react";
import "./CreateTodo.css";
import { ITodo } from "../../interface";

interface ICreateTodoProps {
  setFunction: (todo: ITodo) => void;
}

export default function CreateTodo({ setFunction }: ICreateTodoProps) {
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
      setFunction(newTodo);
      console.log(todoForm);
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
