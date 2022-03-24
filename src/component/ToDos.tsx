import { useContext } from "react";

import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../store/todo-context";

import classes from "./ToDos.module.css";

const ToDO: React.FC = () => {
  const todoCtx = useContext(ToDoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <ToDoItem
          key={item.id}
          text={item.text}
          onRemove={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDO;
