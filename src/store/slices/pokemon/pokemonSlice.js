import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLaodingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
    state.isLoading=false;
    state.page = action.payload.page;
    state.pokemons=action.payload.pokemons;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLaodingPokemons, setPokemons } = pokemonSlice.actions;
