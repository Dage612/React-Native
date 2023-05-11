import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "./apiService";
import { Article } from '../models/inventoryModel';

const apiBase = environment.appUrl;

interface TableParams {
  companyId: string;
  search: string;
  skip: number;
  take: number;
  direction: string;
  column: string;
  customerId: number;
  idInput: number;
  fromDate: string;
  endDate: string;
}

const GetInventoryByUser = async(): Promise<Article[]> => {
    try {
        const token = await AsyncStorage.getItem("@token");
        
        const headers = {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
        };

        const _params: TableParams = {
          companyId: await AsyncStorage.getItem("@companyId") || "",
          search: "",
          skip: 0,
          take: 10,
          direction: "",
          column: "",
          customerId: 0,
          idInput: 0,
          fromDate: "",
          endDate: "",
        };
        
        const params = {
          ..._params,
          userId: await AsyncStorage.getItem("@userId") || "",
          companyId: await AsyncStorage.getItem("@companyId") || "",
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
      const _params: TableParams = {
        companyId: await AsyncStorage.getItem("@companyId") || "",
        search: code,
        skip: 0,
        take: 5,
        direction: "",
        column: "",
        customerId: 0,
        idInput: 0,
        fromDate: "",
        endDate: "",
      };
      const params = {
        ..._params,
        userId: await AsyncStorage.getItem('@userId') || "",
        companyId: await AsyncStorage.getItem('@companyId') || "",
      };
      const response = await axios.get<Article[]>(
        `${apiBase}api/Inventary/InventaryByUser`,
        { headers, params }
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
