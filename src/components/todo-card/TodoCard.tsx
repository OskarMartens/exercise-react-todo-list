import React from "react";

import "./TodoCard.css";
import { ITodo } from "../../interface";

interface ITodoProps{
  todo: ITodo;
  onClick: (todo: ITodo) => void;
};

export default function TodoCard({todo, onClick}: ITodoProps) {
  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>{todo.assignedTo}</p>
      </section>
      <section className="middle-section">
        <h2 className="header">{todo.content}</h2>
      </section>
      <section className="bottom-section">
        <p>{todo.timeStamp}</p>
        <section className="buttons">
          <button onClick={() => onClick(todo)}>Remove</button>
          <button onClick={() => onClick(todo)}>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
