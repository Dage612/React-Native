import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { UserTypes } from "../models/userModel";
import { AuthTypes } from "../models/authModel";
import { authService } from "../services/authService"

export const AuthContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider = ({ children }: { children: ReactNode }) =>{
  const [user, setUser] = useState<UserTypes>({});
  const [globalLoading, setGlobalLoading] = useState(false);


  const LogIn = async (email: string, password: string) => {
    setGlobalLoading(true);
    try {
      const res: UserTypes = await authService.SingIn(email, password) || {};
      await AsyncStorage.setItem("@user", JSON.stringify(res));
      setUser(res);
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  };
  const AuthVerify = async () => {
    setGlobalLoading(true);
    try {
      const userStorage = await AsyncStorage.getItem("@user");
      if (userStorage) setUser(JSON.parse(userStorage));
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const LogOut = async () => {
    setGlobalLoading(true);
    try {
      await AsyncStorage.removeItem("@user");
      setUser({});
    } catch (error) {
      console.log(error);
    }
    setGlobalLoading(false);
  };
  

  useEffect(() => {
    AuthVerify();
  }, []);

  return (
    <AuthContext.Provider value={{ user, globalLoading, LogIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUse = () => useContext(AuthContext);