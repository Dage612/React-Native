import React, { createContext, useContext, useState, useCallback } from "react";
import { Article } from "../models/inventoryModel";
import { inventoryService } from "../services/inventaryService";


interface TodosContextProps {
  todos: Article[];
  cargandoTodos: boolean;
  todoActual: Article | undefined;
  obtenerTodos: () => void;
  buscarPorCodigo: (codigo: string) => Promise<void>;
  setTodoActual: (todo: Article | undefined) => void;
}

const TodosContext = createContext<TodosContextProps>({
  todos: [],
  todoActual: undefined,
  cargandoTodos: false,
  obtenerTodos: () => {},
  buscarPorCodigo: async (codigo: string) => {},
  setTodoActual: () => {},
});

export const TodosContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Article[]>([]);
  const [todoActual, setTodoActual] = useState<Article | undefined>(undefined);
  const [cargandoTodos, setCargandoTodos] = useState(false);

  const obtenerTodos = useCallback(async () => {
    try {
      setCargandoTodos(true);
      const todos = await inventoryService.GetInventoryByUser();
      setTodos(todos);
      setCargandoTodos(false);
    } catch (error) {
      console.error(error);
    }
  }, []);
  const buscarPorCodigo = async (codigo: string): Promise<void> => {
    try {
      setCargandoTodos(true);
      const resultado = await inventoryService.GetInventoryByCode(codigo);
      setTodos(resultado ? [resultado] : []); // Actualizar todos con el resultado de búsqueda o un array vacío
      setTodoActual(resultado);
      setCargandoTodos(false);
    } catch (error) {
      console.error(error);
    }
  };
  

  const contextValue: TodosContextProps = {
    todos,
    todoActual,
    cargandoTodos,
    obtenerTodos,
    buscarPorCodigo,
    setTodoActual,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = (): TodosContextProps => useContext(TodosContext);
