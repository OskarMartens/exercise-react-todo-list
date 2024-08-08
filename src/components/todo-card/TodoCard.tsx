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

  // const toggleDone = () => {
  //   if (done) setDone(false);
  //   else setDone(true);
  // };

  useEffect(() => {
    if (todo.isDone) {
      console.log("hello");
      setHeader(todo.content + " DONE");
      setIsDone(true);
    }
    if (!todo.isDone) {
      setHeader(todo.content);
      setIsDone(false);
    }
  }, [todo.isDone]);

  const doneStatus = todo.isDone ? todo.content + " DONE" : todo.content;

  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>{todo.assignedTo}</p>
      </section>
      <section className="middle-section">
        <h2 className="header">{doneStatus}</h2>
      </section>
      <section className="bottom-section">
        <p>{todo.timeStamp}</p>
        <section className="buttons">
          <button onClick={() => removeTodo(todo)}>Remove</button>
          <button onClick={() => toggleDone(todo)}>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
