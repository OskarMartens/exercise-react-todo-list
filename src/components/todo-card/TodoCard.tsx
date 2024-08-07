import React from "react";

import "./TodoCard.css";
import { ITodo } from "../../interface";

interface ITodoProps{
  data: ITodo;
};

export default function TodoCard({data}: ITodoProps) {
  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>{data.assignedTo}</p>
      </section>
      <section className="middle-section">
        <h2 className="header">{data.content}</h2>
      </section>
      <section className="bottom-section">
        <p>{data.timeStamp}</p>
        <section className="buttons">
          <button>Remove</button>
          <button>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
