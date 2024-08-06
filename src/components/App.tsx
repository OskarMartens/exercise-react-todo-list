import CreateTodo from "./create-todo/CreateTodo";
import TodoCard from "./todo-card/TodoCard";
import { ITodo } from "../interface";

const todos: ITodo[] = [
  {
    assignedTo: "Jim",
    content: "Clean the dishes",
    timeStamp: "1123123",
  },
  {
    assignedTo: "Lars",
    content: "Take out the trash",
    timeStamp: "qweqwe",
  },
];

export function App() {
  return (
    <>
    <CreateTodo />
      {/* {todos.map((task) => (
        <TodoCard />
      ))} */}
    </>
  );
}
