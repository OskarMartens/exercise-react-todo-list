import React, { ChangeEvent, useState } from "react";
import { useOutletContext } from "react-router";
import { ITodo, ITodoContext } from "../../interface";
import TodoCard from "../../components/todo-card/TodoCard";
import "./AboutPage.css";

export default function AboutPage() {
  const { todos, removeTodo, toggleDone, editTodo } = useOutletContext<ITodoContext>();

  const orderByAssignedTo = todos.sort((a, b) =>
    a.assignedTo < b.assignedTo ? 1 : -1
  );

  const orderByDate = todos.sort((a, b) =>
    a.timeStamp > b.assignedTo ? 1 : -1
  );

  return (
    <div>
      <section className="info">
        This the about page which contains a list of todos. Start working!
      </section>
        <section className="selection">
          <select name="" id="">
            <option value="assignedTo">Assigned to</option>
            <option value="timeStamp">Time stamp</option>
          </select>
        </section>
      <section className="todos">
        {todos?.map((todo) => (
          <TodoCard
            key={todo.content}
            todo={todo}
            removeTodo={removeTodo}
            toggleDone={toggleDone}
            editTodo={editTodo}
          />
        ))}
      </section>
    </div>
  );
}
