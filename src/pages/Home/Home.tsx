import React from 'react';
import { useGetPokemons } from '@/hooks/useGetPokemons';

export const Home: React.FC = () => {
  const { data, isFetching } = useGetPokemons();

  return (
    <>
      <div>Home Page</div>
      {
        isFetching ?
        <li>Data is Fetching...</li> :
        <pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </>
  );
};
