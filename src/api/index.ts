import axios from "axios";
import { APIConfiguration } from "@/config/api.config";

export const customAxios = axios.create({
  baseURL: APIConfiguration.baseURL,
});