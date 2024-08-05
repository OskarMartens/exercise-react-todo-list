import React from "react";

import "./CreateTodo.css";

export default function CreateTodo() {
  return (
    <div className="create-main">
      <h2>Create Todo</h2>
      <input type="text" placeholder="What needs to be done?" />
      <input type="text" placeholder="Who's doing it?"></input>
      <button>Save todo</button>
    </div>
  );
}
