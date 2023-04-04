import { NavigationContainer } from "@react-navigation/native";
import { AuthUse } from "../contexts/authContexts";
import AuthStack from "./stack/authStack";
import DrawerNavigation from "./drawer/drawerNavigate";


export default function Routing() {
  const { user, globalLoading } = AuthUse();

  return (
    <NavigationContainer>
    {user && Object.keys(user).length > 0 ? <DrawerNavigation /> : <AuthStack />}
  </NavigationContainer>
  );
}