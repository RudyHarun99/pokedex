import React from 'react';
import { useGetPokemons } from '@/hooks/useGetPokemons';

export const Home: React.FC = () => {
  const PAGE_SIZE = 24; // Number of Pokémon per page
  const { data, isLoading, setPage } = useGetPokemons(PAGE_SIZE);

  return (
    <>
      <div>Home Page</div>

      {
        isLoading ?
        <li>Data is Fetching...</li> :
        <pre>{JSON.stringify(data, null, 4)}</pre>
      }

      {
        (data?.length === PAGE_SIZE) && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isLoading}
          >
              {
                isLoading ?
                "Loading..." :
                "Load More Pokémon"
              }
          </button>
        )
      }
    </>
  );
};
