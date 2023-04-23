import axios from 'axios';
import { environment } from "./apiService";
import { Article } from '../models/inventoryModel';
const apiBase = environment.appUrl;
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetInventoryByUser = async(): Promise<Article[]> => {
    try {
        const token = await AsyncStorage.getItem("@token");
        console.log(token);
        const headers = {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
        };
        
      const params = {
        userId: await AsyncStorage.getItem("@userId"),
        access: await AsyncStorage.getItem("@companyId"),
        companyId: await AsyncStorage.getItem("@companyId"),
    };
      const response = await axios.get<Article[]>(
        `${apiBase}api/Inventary/InventaryByUser`,
        { headers, params }
      );
      
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const GetInventoryByCode = async (code: string): Promise<Article | undefined> => {
    try {
      const token = await AsyncStorage.getItem('@token');
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      const _params: any = {
        search: code,
      };
      const parameters = {
        _params,
        userId: await AsyncStorage.getItem('@userId'),
        companyId: await AsyncStorage.getItem('@companyId'),
      };
      const response = await axios.get<Article[]>(
        `${apiBase}api/Inventary/InventaryByUser`,
        { headers, params: parameters }
      );
      return response.data[0]; // Retorna el primer artículo encontrado o undefined si no hay coincidencias
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  
  
export const inventoryService = {
    GetInventoryByUser,
    GetInventoryByCode
    
};
  