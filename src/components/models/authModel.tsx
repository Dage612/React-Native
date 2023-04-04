import { UserTypes } from "./userModel";

export interface AuthTypes {
    user: UserTypes;
    globalLoading: boolean;
    LogIn: (login: string, password: string) => Promise<void>;
    LogOut: () => void;
  }