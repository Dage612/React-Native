import React, { createContext, useContext, useState } from "react";
import { Todo } from "../models/inventoryModel";


interface TodosContextProps {
  todos: Todo[];
  cargandoTodos: boolean;
  todoActual: Todo | undefined;
  obtenerTodos: () => void;
  obtenerTodoPorId: (id: number) => void;
  setTodoActual: (todo: Todo | undefined) => void;
}

const TodosContext = createContext<TodosContextProps>({
  todos: [],
  todoActual: undefined,
  cargandoTodos: false,
  obtenerTodos: () => {},
  obtenerTodoPorId: () => {},
  setTodoActual: () => {},
});

export const TodosContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoActual, setTodoActual] = useState<Todo | undefined>(undefined);
  const [cargandoTodos, setCargandoTodos] = useState(false);

  const obtenerTodos = React.useCallback(async () => {
    try {
      setCargandoTodos(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();
      setTodos(todos);
      setCargandoTodos(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const obtenerTodoPorId = React.useCallback(async (id: number) => {
    try {
      setCargandoTodos(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo = await response.json();
      setTodoActual(todo);
      setCargandoTodos(false);
      return todo;
    } catch (error) {
      console.error(error);
    }
  }, []);

  // React.useEffect(() => {
  //   obtenerTodos();
  // }, [obtenerTodos]);

  const contextValue: TodosContextProps = {
    todos,
    todoActual,
    cargandoTodos,
    obtenerTodos,
    obtenerTodoPorId,
    setTodoActual,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext<TodosContextProps>(TodosContext);