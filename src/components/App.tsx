import { useState } from "react";
import { Outlet } from "react-router";
import { ITodo, ITodoContext } from "../interface";
import data from "../data/todos.json";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>(data as ITodo[]);

  const addTodo = (newTodo: ITodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: ITodo): void => {
    console.log(todo);
    setTodos(todos.filter((t) => t !== todo));
  };

  const todoContext: ITodoContext = {
    todos,
    addTodo,
    removeTodo
  };

  return (
    <>
      <main className="app-main">
        <Outlet context={todoContext} />
      </main>
    </>
  );
}
