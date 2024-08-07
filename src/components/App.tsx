import CreateTodo from "./create-todo/CreateTodo";
import TodoCard from "./todo-card/TodoCard";
import { ITodo } from "../interface";
import { useState } from "react";
import data from "../data/todos.json";

export function App() {
  const [todos, setTodos] = useState<ITodo[]>(data as ITodo[]);

  const addTodo = (newTodo: ITodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo: ITodo): void  => {
    setTodos(todos.filter((t) => t !== todo))
  };

  return (
    <>
      <main className="app-main">
        <CreateTodo setFunction={addTodo}/>
        {todos?.map((todo) => (
          <TodoCard key={todo.content} todo={todo} onClick={removeTodo} />
        ))}
      </main>
    </>
  );
}
