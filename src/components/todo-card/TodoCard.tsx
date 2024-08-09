import React, { useEffect, useState } from "react";
import "./TodoCard.css";
import { ITodo } from "../../interface";

interface ITodoCardProps {
  todo: ITodo;
  removeTodo: (todo: ITodo) => void;
  toggleDone: (todo: ITodo) => void;
  editTodo: (todo: ITodo, input: string) => void;
}

export default function TodoCard({
  todo,
  removeTodo,
  toggleDone,
  editTodo,
}: ITodoCardProps) {
  const [isDone, setIsDone] = useState<boolean>(todo.isDone);
  const [header, setHeader] = useState<string>(todo.content);
  const [editInput, setEditInput] = useState<JSX.Element | undefined>(
    undefined
  );
  const [editButtonText, setEditButtonText] = useState<string>("Edit");
  const [editText, setEditText] = useState<string>("");
  const [className, setClassname] = useState<string>("header");

  useEffect(() => {
    if (isDone) {
      setClassname("header-done");
    } else {
      setClassname("header");
    }
  }, [isDone, todo.content]);

  const handleToggleDone = () => {
    setIsDone(!isDone);
    toggleDone(todo);
  };

  const handleInputChange = (input: string) => {
    if (input.length > 0) {
      setEditButtonText("Save");
      setEditText(input);
    } else {
      setEditButtonText("Close");
      setEditText(input);
    }
  };

  const handleEditTodo = () => {
    if (!editInput) {
      setEditInput(
        <input onChange={(e) => handleInputChange(e.target.value)} />
      );
      setEditButtonText("Close");
    } else if (editText.length > 0) {
      editTodo(todo, editText);
      setHeader(editText);
      setEditButtonText("Edit");
      setEditInput(undefined);
    } else {
      setEditButtonText("Edit");
      setEditInput(undefined);
    }
  };

  return (
    <div className="todo-card-main">
      <section className="top-section">
        <p>{todo.assignedTo}</p>
        {/* <button>Move up</button>
        <button>Move down</button> */}
      </section>
      <section className="middle-section">
        <h2 className={className}>{header}</h2>
        {editInput}
        <button onClick={handleEditTodo}>{editButtonText}</button>
      </section>
      <section className="bottom-section">
        <p>{todo.timeStamp}</p>
        <section className="buttons">
          <button onClick={() => removeTodo(todo)}>Remove</button>
          <button onClick={handleToggleDone}>Mark as done</button>
        </section>
      </section>
    </div>
  );
}
