import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPokemons } from "@/services/redux/pokemon.slice";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "@/api/getPokemons";

export const useGetPokemons = () => {
  const dispatch = useDispatch();
  const queryKey = [ '?limit=100000&offset=0' ];

  const { data, error, isFetching } = useQuery({
    queryKey,
    queryFn: getPokemons,
    retry: (failureCount, error) => {
      if (error) {
        console.error('Schema validation error:', error);
        return false;
      }

      return failureCount <= 3;
    },
  });
  
  useEffect(() => {
    dispatch(setPokemons(data));
  }, [data]);

  return {
    data,
    isFetching,
    error,
    queryKey,
  };
};