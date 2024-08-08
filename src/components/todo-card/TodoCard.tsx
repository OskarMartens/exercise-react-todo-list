import React, { useEffect, useState } from "react";
import "./TodoCard.css";
import { ITodo } from "../../interface";

interface ITodoProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

export default function TodoCard({ todo, onClick }: ITodoProps) {
  const [done, setDone] = useState(false);
  const [header, setHeader] = useState<string>(todo.content);

  const toggleDone = () => {
    if (done) setDone(false);
    else setDone(true);
  };

  useEffect(() => {
    if (done) {
      setHeader(todo.content + " DONE");
    }
    if (!done) {
      setHeader(todo.content);
    }
  }, [done]);

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
          <button onClick={() => onClick(todo)}>Remove</button>
          <button onClick={toggleDone}>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
