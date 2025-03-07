import { customAxios } from ".";

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
};

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  },
  is_hidden: boolean;
  lot: number;
};

type PokemonStat = {
  base_stat: number;
  effor: number;
  stat: {
    name: string;
    url: string;
  }
};

export const getPokemons = async (page: number, PAGE_SIZE: number) => {
  const { data } = await customAxios.get(`?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`);

  const pokemonData = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const details = await customAxios.get(pokemon.url);
      const { data: detail } = details;
      let {
        id,
        name,
        weight,
        height,
        sprites,
        types,
        abilities,
        stats,
      } = detail;
      const image = sprites.other['official-artwork'].front_default;
      const artwork = sprites.front_default;
      types = detail.types.map((el: PokemonType) => el.type.name);
      abilities = detail.abilities.map((el: PokemonAbility) => el.ability.name);
      stats = detail.stats.map((el: PokemonStat) => {
        return { base_stat: el.base_stat, name: el.stat.name };
      });
      const pokemonDetail = {
        id,
        name,
        weight,
        height,
        image,
        artwork,
        types,
        abilities,
        stats,
      };
      return pokemonDetail;
    })
  );

  return pokemonData;
};