import { PokemonApi } from "../../../api/PokemonApi";
import { setPokemons, startLaodingPokemons } from "./pokemonSlice";

export const GetPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLaodingPokemons());
    //Realizar peticion http
    /* const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const data = await resp.json(); */
    const {data} = await PokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
