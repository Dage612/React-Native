import { AuthProvider } from "../contexts/authContexts";
import Routing from "./routing";


export default function Navigation() {
  return (
    <AuthProvider>   
        <Routing/>  
    </AuthProvider>
  );
}