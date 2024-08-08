import { useState } from "react";
import { Outlet } from "react-router";
import { ITodo, ITodoContext } from "../interface";
import data from "../data/todos.json";
import Header from "./header/Header";

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

  const toggleDone = (todo: ITodo): void => {
    if(todo.isDone)
      todo.isDone = false;
    else
      todo.isDone = true;
  }

  const editTodo = (todo: ITodo, input: string): void => {
    todo.content = input;
  }

  const todoContext: ITodoContext = {
    todos: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleDone: toggleDone
  };

  return (
    <>
      <main className="app-main">
        <Header />
        <Outlet context={todoContext} />
      </main>
    </>
  );
}
