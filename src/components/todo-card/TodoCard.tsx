import React, { useEffect, useState } from "react";
import "./TodoCard.css";
import { ITodo } from "../../interface";

interface ITodoProps {
  todo: ITodo;
  removeTodo: (todo: ITodo) => void;
  toggleDone: (todo: ITodo) => void;
}

export default function TodoCard({ todo, removeTodo, toggleDone }: ITodoProps) {
  const [isDone, setIsDone] = useState<boolean>(todo.isDone); 
  const [header, setHeader] = useState<string>(todo.content);

  useEffect(() => {
    if (isDone) {
      setHeader(todo.content + " DONE");
    } else {
      setHeader(todo.content);
    }
  }, [isDone, todo.content]);

  const handleToggleDone = () => {
    setIsDone(!isDone);
    toggleDone(todo);
  };

  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>{todo.assignedTo}</p>
      </section>
      <section className="middle-section">
        <h2 className="header">{header}</h2>
      </section>
      <section className="bottom-section">
        <p>{todo.timeStamp}</p>
        <section className="buttons">
          <button onClick={() => removeTodo(todo)}>Remove</button>
          <button onClick={handleToggleDone}>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
