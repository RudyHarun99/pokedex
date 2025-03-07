import { QueryFunction } from "@tanstack/react-query";
import { customAxios } from ".";

export const getPokemons: QueryFunction = async ({
  queryKey,
}) => {
  const [ path ] = queryKey;
  const apiPath = `${path}`;
  const response = await customAxios.get(apiPath);

  return response.data;
};