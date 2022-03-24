import React, { useRef ,useContext} from "react"

import { ToDoContext } from "../store/todo-context";

import classes from './NewToDo.module.css'

const NewToDO: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(ToDoContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputText = inputRef.current!.value;

    if (inputText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(inputText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="newItem">new item</label>
      <input type="text" id="newItem" ref={inputRef} />
      <button>Add new item</button>
    </form>
  );
};

export default NewToDO;
