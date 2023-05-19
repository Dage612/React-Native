import React, { createContext, useContext, useState, useCallback } from "react";
import { TypeDocument } from "../models/documentTypeModel";
import { documentService } from "../services/documentService";

interface TodosContextProps {
  todosTypeDocuments: TypeDocument[];
  obtenerTodosTypeDocuments: () => void;
}

const TodosContext = createContext<TodosContextProps>({
  todosTypeDocuments: [],
  obtenerTodosTypeDocuments: () => {},
});

export const TodosDocumentProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [todosTypeDocuments, setTodosTypeDocuments] = useState<TypeDocument[]>([]);

  const obtenerTodosTypeDocuments = useCallback(async () => {
    try {
      const todos = await documentService.GetDocumentTypes();
      setTodosTypeDocuments(todos);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const contextValue: TodosContextProps = {
    todosTypeDocuments,
    obtenerTodosTypeDocuments,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosDocument= (): TodosContextProps => useContext(TodosContext);
