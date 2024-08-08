import React from "react";
import { useOutletContext } from "react-router";
import { ITodoContext } from "../../interface";
import TodoCard from "../../components/todo-card/TodoCard";
import "./AboutPage.css";

export default function AboutPage() {
  const { todos, removeTodo, toggleDone } = useOutletContext<ITodoContext>();

  return (
    <div>
      <section className="info">
        This the about page which contains a list of todos. Start working!
      </section>
      <section className="todos">
        {todos?.map((todo) => (
          <TodoCard key={todo.content} todo={todo} removeTodo={removeTodo} toggleDone={toggleDone} />
        ))}
      </section>
    </div>
  );
}
