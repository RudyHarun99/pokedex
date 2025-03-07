import { createSlice } from "@reduxjs/toolkit";

type PokemonStat = {
  base_stat: number;
  name: string;
};

type PokemonDetail = {
  id: number;
  name: string;
  weight: number;
  height: number;
  image: string;
  artwork: string;
  types: string[];
  abilities: string[];
  stats: PokemonStat[];
};

type PokemonState = {
  pokemons: PokemonDetail[];
  pokemonDetail: PokemonDetail;
}

const initialState: PokemonState = {
  pokemons: [],
  pokemonDetail: {
    id: 0,
    name: "",
    weight: 0,
    height: 0,
    image: "",
    artwork: "",
    types: [],
    abilities: [],
    stats: []
  },
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [ ...state.pokemons, ...action.payload.data ];
    },
    setPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
  },
});

export const {
  setPokemons,
  setPokemonDetail,
} = pokemonSlice.actions;