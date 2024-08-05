import TodoCard from "./components/todo-card/TodoCard";
import { Todo } from "./interface";

const todos: Todo[] = [
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
      {todos.map((task) => (
        <TodoCard />
      ))}
    </>
  );
}
