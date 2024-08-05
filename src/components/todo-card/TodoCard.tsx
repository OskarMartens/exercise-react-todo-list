import React from "react";

import "./TodoCard.css";

export default function TodoCard() {
  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>Name of person</p>
      </section>
      <section className="middle-section">
        <h2 className="header">Name of task</h2>
      </section>
      <section className="bottom-section">
        <p>Time stamp</p>
        <section className="buttons">
          <button>Remove</button>
          <button>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
