import CreateTodo from "./create-todo/CreateTodo";
import TodoCard from "./todo-card/TodoCard";
import { ITodo } from "../interface";
import { useState } from "react";
import data from "../data/todos.json";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>(data as ITodo[]);

  return (
    <>
      <main className="app-main">
        <CreateTodo />
        {todos?.map((todo) => (
          <TodoCard key={todo.content} data={todo} />
        ))}
      </main>
    </>
  );
}
