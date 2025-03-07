import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemonDetail: {},
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload?.results;
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