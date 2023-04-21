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
        userId: "QRvGJWntzUA@",
        access: "QRvGJWntzUA@",
        companyId: "QRvGJWntzUA@"
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
  
export const inventoryService = {
    GetInventoryByUser
  };
  