import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { environment } from "./apiService";
import { TypeDocument } from '../models/documentTypeModel';

const apiBase = environment.appUrl;

const GetDocumentTypes = async (): Promise<TypeDocument[]> => {
  try {
    const token = await AsyncStorage.getItem("@token");

    const headers = {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    };

    const response = await axios.get<TypeDocument[]>(
      `${apiBase}api/Document/Types`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const documentService = {
    GetDocumentTypes,

};
