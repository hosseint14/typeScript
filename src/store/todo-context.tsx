import React, { useState } from "react";

import ToDo from "../models/ToDO";

type TodosCotextObj = {
  items: ToDo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const ToDoContext = React.createContext<TodosCotextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addItemHandler = (text: string) => {
    const newTodo = new ToDo(text);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeItemHandler = (id: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosCotextObj = {
    items: todos,
    addTodo: addItemHandler,
    removeTodo: removeItemHandler,
  };

  return (
    <ToDoContext.Provider value={contextValue}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default TodoContextProvider;
