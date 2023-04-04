import { NavigationContainer } from "@react-navigation/native";
import { AuthUse } from "../contexts/authContexts";
import AuthStack from "./authStack";
import AppStack from "./appStack";

export default function Routing() {
  const { user, globalLoading } = AuthUse();

  return (
    <NavigationContainer>
    {user && Object.keys(user).length > 0 ? <AppStack /> : <AuthStack />}
  </NavigationContainer>
  );
}