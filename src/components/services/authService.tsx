import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "./apiService";
import { UserTypes } from '../models/userModel';
import { Alert} from 'react-native';

const apiBase = environment.appUrl;

const SingIn = async (email: string, password: string): Promise<UserTypes> => {
  const postData = { user: email.trim(), password: password.trim() };
  try {
    const response = await axios.post(apiBase + 'api/Account/Login', postData);
    const token = response.data.token;
    if (token) {
      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("@companyId", response.data.companyId);
      await AsyncStorage.setItem("@access", response.data.companyId);
      await AsyncStorage.setItem("@userId", response.data.userId);
      return { email, name: response.data.userName };
    }
    throw new Error(response.data.message || 'Error desconocido');
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Error', error.message || 'Credenciales incorrectas');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
    throw new Error('credenciais incorretas');
  }
};

const SignOut = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      await AsyncStorage.removeItem("@token");
      resolve(null);
    }, 1000);
  });
};
export const authService = {
  SingIn,
  SignOut
};
