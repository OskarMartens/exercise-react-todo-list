import React from "react";
import { useOutletContext } from "react-router";
import { ITodoContext } from "../../interface";
import TodoCard from "../../components/todo-card/TodoCard";

export default function AboutPage() {
  const { todos, removeTodo } = useOutletContext<ITodoContext>();
  
  return (
    <div>
      {todos?.map((todo) => (
        <TodoCard key={todo.content} todo={todo} onClick={removeTodo} />
      ))}
    </div>
  );
}
