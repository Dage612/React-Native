import { AuthProvider } from "../contexts/authContexts";
import { TodosContextProvider } from "../contexts/inventoryContexts";
import Routing from "./routing";


export default function Navigation() {
  return (
    <AuthProvider>   
      <TodosContextProvider>
      <Routing/> 
      </TodosContextProvider>
    </AuthProvider>
  );
}