import React, { ChangeEvent, useState } from "react";
import { useOutletContext } from "react-router";
import { ITodo, ITodoContext } from "../../interface";
import TodoCard from "../../components/todo-card/TodoCard";
import "./AboutPage.css";

export default function AboutPage() {
  const { todos, removeTodo, toggleDone, editTodo } =
    useOutletContext<ITodoContext>();
  const [listToRender, setListToRender] = useState<ITodo[]>(todos);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let sortedTodos = [...todos];

    switch (e.target.value) {
      case "no-specific":
        setListToRender(sortedTodos);
        break;
      case "assignedTo":
        sortedTodos = sortedTodos.sort((a, b) =>
          a.assignedTo > b.assignedTo ? 1 : -1
        );
        setListToRender(sortedTodos);
        break;
      case "date":
        sortedTodos = sortedTodos.sort((a, b) =>
          a.timeStamp > b.timeStamp ? 1 : -1
        );
        setListToRender(sortedTodos);
        break;
    }
  };

  return (
    <div>
      <section className="info">
        This the about page which contains a list of todos. Start working!
      </section>
      <section className="selection">
        <select name="" id="" onChange={handleSortChange}>
          <option value="no-specific">No specific order</option>
          <option value="assignedTo">Assigned to</option>
          <option value="date">Date</option>
        </select>
      </section>
      <section className="todos">
        {listToRender?.map((todo) => (
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
