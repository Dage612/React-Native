import { AuthProvider } from "../contexts/authContexts";
import { TodosDocumentProvider } from "../contexts/documentContexts";
import { TodosContextProvider } from "../contexts/inventoryContexts";
import Routing from "./routing";

export default function Navigation() {
  return (
    <AuthProvider>
      <TodosDocumentProvider>
        <TodosContextProvider>
          <Routing /> 
        </TodosContextProvider>
      </TodosDocumentProvider>
    </AuthProvider>
  );
}
