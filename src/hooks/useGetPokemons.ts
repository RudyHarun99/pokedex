import { useState, useEffect } from "react";
import { useAppDispatch } from "@/services/redux";
import { setPokemons } from "@/services/redux/pokemon.slice";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "@/api/getPokemons";

export const useGetPokemons = (PAGE_SIZE: number) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0); // Track current page/ Store all loaded Pokémon

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", page], // Unique key for each page
    queryFn: () => getPokemons(page, PAGE_SIZE),
  });

  useEffect(() => {
    if (data) {
      dispatch(setPokemons({ data }));
    };
  }, [data]);

  return {
    data,
    isLoading,
    setPage
  }
};