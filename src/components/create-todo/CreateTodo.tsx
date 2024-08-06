import React, { useState } from "react";

import "./CreateTodo.css";
import { ITodo } from "../../interface";

export default function CreateTodo() {
  const [todoData, setTodoData] = useState<ITodo>({
    assignedTo: "",
    content: "",
    timeStamp: new Date().toLocaleString(),
  });

  const saveTodo = () => {
    setTodoData({...todoData, timeStamp: new Date().toLocaleString()})
    console.log(todoData);
  }

  return (
    <div className="create-main">
      <h2>Create Todo</h2>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setTodoData({ ...todoData, content: e.target.value })}
      />
      <input type="text" placeholder="Who's doing it?" 
      onChange={(e) => setTodoData({...todoData, assignedTo: e.target.value})}/>
      <button onClick={saveTodo}>Save todo</button>
    </div>
  );
}
